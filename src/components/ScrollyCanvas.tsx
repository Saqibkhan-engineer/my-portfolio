'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ScrollyCanvas({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalFrames = 120;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end']
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${frameNum}_delay-0.058s.webp`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (canvas && ctx && images.length > 0) {
      let targetIndex = Math.floor(index);
      let img = images[targetIndex];
      
      // If the exact frame isn't loaded yet, find the closest previous loaded frame
      if (!img || !img.complete) {
        for (let i = targetIndex; i >= 0; i--) {
          if (images[i] && images[i].complete) {
            img = images[i];
            break;
          }
        }
      }

      if (img && img.complete) {
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(frameIndex.get());
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, loadedCount]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-[#0d0d0d]">
      {loadedCount === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 font-bold text-2xl bg-[#0d0d0d]">
          LOADING...
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
