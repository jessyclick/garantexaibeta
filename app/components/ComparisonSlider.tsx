"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    };

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-accent-orange/10 border border-white/10 select-none group">
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-col-resize"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Before Image (Bottom Layer) */}
        <div className="absolute inset-0 w-full h-full">
           <img 
            src="/assets/bg-before.jpeg" 
            alt="Manual Process" 
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute hidden md:block top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg text-white font-montserrat font-bold text-sm md:text-lg tracking-wider pointer-events-none">
            РУЧНОЙ ТРУД
          </div>
        </div>

        {/* After Image (Top Layer) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src="/assets/bg-after.jpeg" 
            alt="AI Automation" 
            className="w-full h-full object-cover filter brightness-110 contrast-110"
            draggable={false}
          />
          <div className="absolute hidden md:block top-12 left-6 px-4 py-2 bg-gradient-to-r from-accent-orange/90 to-accent-gold/90 backdrop-blur-md shadow-lg shadow-orange-500/20 rounded-lg text-green-400 font-montserrat font-bold text-sm md:text-lg tracking-wider pointer-events-none whitespace-nowrap">
            Ваш бизнес с Garantex AI
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl cursor-col-resize hover:scale-110 transition-transform duration-200">
            <div className="flex gap-1">
              <ChevronLeft size={20} className="text-black/80" />
              <ChevronRight size={20} className="text-black/80" />
            </div>
          </div>
        </div>

        {/* Instructions overlay (fades out) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur text-white/80 px-4 py-2 rounded-full text-xs md:text-sm pointer-events-none animate-[fadeOut_1s_ease-in-out_3s_forwards]">
          Потяните ползунок для сравнения
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;