import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 128;
const BG_COLOR = '#8F1A19'; // Exact detected background color from character1.mp4

// Shortest path circular interpolation
function lerpAngle(current, target, factor = 0.26) {
  let diff = (target - current) % (Math.PI * 2);
  if (diff < -Math.PI) diff += Math.PI * 2;
  if (diff > Math.PI) diff -= Math.PI * 2;
  return current + diff * factor;
}

// Check if an image element is fully loaded and ready to draw
function isReady(img) {
  return img && (img.complete || img.naturalWidth > 0) && img.naturalWidth !== 0;
}

// Find nearest loaded frame so cursor tracking never jerks back to center
function getNearestLoadedFrame(targetIdx, images, centerImage) {
  if (isReady(images[targetIdx])) return images[targetIdx];

  // Search outward in both directions around the 128-frame circle
  for (let offset = 1; offset < TOTAL_FRAMES / 2; offset++) {
    const prev = (targetIdx - offset + TOTAL_FRAMES) % TOTAL_FRAMES;
    if (isReady(images[prev])) return images[prev];

    const next = (targetIdx + offset) % TOTAL_FRAMES;
    if (isReady(images[next])) return images[next];
  }

  return isReady(centerImage) ? centerImage : null;
}

export default function CharacterTracker() {
  const canvasRef = useRef(null);

  // Mutable state stored in ref for zero-allocation 60 FPS performance
  const stateRef = useRef({
    currentAngle: 0,
    targetAngle: 0,
    targetFrame: -1, // -1 means center.webp
    isCenter: true,
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    hasMoved: false,
    faceX: window.innerWidth / 2,
    faceY: window.innerHeight * 0.45,
    images: new Array(TOTAL_FRAMES),
    centerImage: null,
    lastRenderedKey: null,
    needsRedraw: true,
    dpr: 1,
  });

  // Prioritized progressive preloading
  useEffect(() => {
    // 1. Load center image first for immediate visual display
    const centerImg = new Image();
    centerImg.src = '/frames/center.webp';
    if (centerImg.decode) {
      centerImg.decode().catch(() => {});
    }
    centerImg.onload = () => {
      stateRef.current.centerImage = centerImg;
      stateRef.current.needsRedraw = true;
    };
    stateRef.current.centerImage = centerImg;

    const images = new Array(TOTAL_FRAMES);
    stateRef.current.images = images;

    // Load order for 128 frames:
    // 1. Primary 8 cardinal/intercardinal directions (every 16th frame: 0, 16, 32, 48, 64, 80, 96, 112)
    // 2. Secondary 8 directions (8, 24, 40, 56, 72, 88, 104, 120)
    // 3. Tertiary 16 directions (every 4th frame)
    // 4. All remaining frames
    const primary = [0, 16, 32, 48, 64, 80, 96, 112];
    const secondary = [8, 24, 40, 56, 72, 88, 104, 120];
    const tertiary = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      if (!primary.includes(i) && !secondary.includes(i)) tertiary.push(i);
    }
    const remaining = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (!primary.includes(i) && !secondary.includes(i) && !tertiary.includes(i)) {
        remaining.push(i);
      }
    }

    const loadQueue = [...primary, ...secondary, ...tertiary, ...remaining];

    // Stream frames progressively with decode()
    loadQueue.forEach((frameIdx, index) => {
      // Stagger slightly to avoid saturating browser network connections
      setTimeout(() => {
        const img = new Image();
        img.src = `/frames/frame_${frameIdx}.webp`;
        if (img.decode) {
          img.decode().catch(() => {});
        }
        img.onload = () => {
          images[frameIdx] = img;
          stateRef.current.needsRedraw = true;
        };
        images[frameIdx] = img;
      }, index * 10);
    });
  }, []);

  // 60 FPS Cursor Tracking & Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    let animId = null;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // DPR capped to 1.0 (or 1.25) to avoid huge fill rates while maintaining crisp clarity
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      stateRef.current.dpr = dpr;
      stateRef.current.needsRedraw = true;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (clientX, clientY) => {
      stateRef.current.mouseX = clientX;
      stateRef.current.mouseY = clientY;
      stateRef.current.hasMoved = true;
    };

    const onMouseMove = (e) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    // 60 FPS Render Loop
    const render = () => {
      animId = requestAnimationFrame(render);

      const s = stateRef.current;
      const { images, centerImage, mouseX, mouseY, hasMoved, dpr } = s;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // 16:9 frame aspect ratio
      const frameAspect = 16 / 9;
      const screenAspect = screenWidth / screenHeight;

      let drawWidth, drawHeight, drawX, drawY;
      const isMobile = screenWidth < 768;

      if (isMobile) {
        drawHeight = Math.min(screenHeight * 0.72, screenWidth * 1.25);
        drawWidth = drawHeight * frameAspect;
        drawX = (screenWidth - drawWidth) / 2;
        drawY = screenHeight * 0.04;
      } else if (screenAspect > frameAspect) {
        drawHeight = Math.min(screenWidth / frameAspect, screenHeight * 1.15);
        drawWidth = drawHeight * frameAspect;
        drawX = (screenWidth - drawWidth) / 2;
        drawY = screenHeight - drawHeight;
      } else {
        drawHeight = screenHeight * 1.05;
        drawWidth = drawHeight * frameAspect;
        drawX = (screenWidth - drawWidth) / 2;
        drawY = screenHeight - drawHeight;
      }

      // Face center coordinates in screen space
      const faceX = drawX + drawWidth * 0.5;
      const faceY = drawY + drawHeight * 0.388;
      s.faceX = faceX;
      s.faceY = faceY;

      // 12% screen radius center deadzone
      const screenRadius = Math.sqrt((screenWidth / 2) ** 2 + (screenHeight / 2) ** 2);
      const deadzoneRadius = screenRadius * 0.12;

      const dx = mouseX - faceX;
      const dy = mouseY - faceY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const inDeadzone = !hasMoved || distance <= deadzoneRadius;

      if (!inDeadzone) {
        // Raw cursor angle from face center
        const rawAngle = Math.atan2(dy, dx);

        // Convert to clockwise angle starting from UP (0 = UP)
        let targetAlpha = rawAngle + Math.PI / 2;
        if (targetAlpha < 0) targetAlpha += Math.PI * 2;
        targetAlpha = targetAlpha % (Math.PI * 2);

        // Circular interpolation (shortest path) with factor 0.26
        s.currentAngle = lerpAngle(s.currentAngle, targetAlpha, 0.26);

        // Map smoothed angle to 0..63
        const normalized = (s.currentAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const frameIdx = Math.round((normalized / (Math.PI * 2)) * TOTAL_FRAMES) % TOTAL_FRAMES;

        s.targetFrame = frameIdx;
        s.isCenter = false;
      } else {
        s.isCenter = true;
        s.targetFrame = -1;
      }

      // Frame selection with nearest-neighbor fallback
      let frameToRender = null;
      if (s.isCenter) {
        frameToRender = isReady(centerImage) ? centerImage : (isReady(images[0]) ? images[0] : null);
      } else {
        frameToRender = getNearestLoadedFrame(s.targetFrame, images, centerImage);
      }

      if (!frameToRender) {
        return;
      }

      // Integer coordinates for GPU hardware blit
      const iX = Math.round(drawX * dpr);
      const iY = Math.round(drawY * dpr);
      const iW = Math.round(drawWidth * dpr);
      const iH = Math.round(drawHeight * dpr);
      const iCanvasW = canvas.width;
      const iCanvasH = canvas.height;

      // Smart dirty check: Only clear and redraw when the visible frame changes or on resize
      const frameKey = `${s.isCenter ? 'center' : s.targetFrame}_${frameToRender.src}_${iCanvasW}_${iCanvasH}`;

      if (frameKey !== s.lastRenderedKey || s.needsRedraw) {
        ctx.fillStyle = BG_COLOR;
        ctx.fillRect(0, 0, iCanvasW, iCanvasH);
        ctx.drawImage(frameToRender, iX, iY, iW, iH);

        s.lastRenderedKey = frameKey;
        s.needsRedraw = false;
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      className="character-tracker-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
}
