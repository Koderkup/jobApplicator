import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterPageProps {
  leftSrc: string;
  rightSrc: string;
}

const BeforeAfterPage = ({ leftSrc, rightSrc }: BeforeAfterPageProps) => {
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const startDrag = () => {
    isDragging.current = true;
    document.body.style.userSelect = 'none';
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.body.style.userSelect = '';
  };

  const updatePosition = (clientX: number) => {
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const clamped = Math.max(0, Math.min(100, percentage));
    setPosition(clamped);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrag);

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopDrag);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrag);

      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        touchAction: 'none', // важно для мобильных
      }}
    >
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '5px',
          left: `${position}%`,
          backgroundColor: 'gray',
          cursor: 'col-resize',
          zIndex: 10,
        }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      />

      <img
        src={leftSrc}
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      <img
        src={rightSrc}
        style={{
          position: 'absolute',
          clipPath: `inset(0 0 0 ${position}%)`,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default BeforeAfterPage;
