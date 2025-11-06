import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Adds subtle parallax to side monuments for extra depth
export default function ParallaxMonuments() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    // no-op: just to ensure hook order remains stable
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <motion.img
        src="https://images.unsplash.com/photo-1578926375605-eaf7559b145d?q=80&w=1200&auto=format&fit=crop"
        alt="Ancient statue"
        className="select-none absolute -left-24 bottom-[-2rem] w-72 sm:w-80 md:w-96 rotate-[-8deg] opacity-50 md:opacity-70 drop-shadow-xl rounded"
        style={{ y: yLeft }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop"
        alt="Ancient temple column"
        className="select-none absolute -right-24 top-6 w-72 sm:w-80 md:w-96 rotate-[10deg] opacity-40 md:opacity-60 drop-shadow-xl rounded"
        style={{ y: yRight }}
      />
    </div>
  );
}
