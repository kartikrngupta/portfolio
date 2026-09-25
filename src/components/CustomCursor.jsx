import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let isVisible = false;
    let animId = null;
    let isRunning = false;

    const updateTransforms = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const scale = isHovering ? 1.55 : 1.0;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
    };

    const render = () => {
      // Smooth lerp for trailing aura ring
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.22;
      ringY += dy * 0.22;

      updateTransforms();

      // If ring is within 0.15px of mouse and mouse isn't moving, sleep the loop to save CPU/GPU
      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        ringX = mouseX;
        ringY = mouseY;
        updateTransforms();
        isRunning = false;
        animId = null;
        return;
      }

      animId = requestAnimationFrame(render);
    };

    const wakeLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      wakeLoop();
    };

    // Use event delegation for hover detection without querying on every mousemove pixel
    const onMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('a, button, [role="button"], input, textarea, select, .interactive')) {
        if (!isHovering) {
          isHovering = true;
          if (ringRef.current) ringRef.current.classList.add('is-hover');
          wakeLoop();
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('a, button, [role="button"], input, textarea, select, .interactive')) {
        if (isHovering) {
          isHovering = false;
          if (ringRef.current) ringRef.current.classList.remove('is-hover');
          wakeLoop();
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mouseout', onMouseOut, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    wakeLoop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0, transition: 'opacity 0.2s ease' }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0, transition: 'opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease' }} />
    </>
  );
}
