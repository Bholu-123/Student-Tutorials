import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [p, setP] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max > 0 ? el.scrollTop / max : 0;
      setP(Math.min(1, Math.max(0, ratio)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full overflow-hidden bg-gray-200/60 motion-reduce:hidden dark:bg-gray-800/80"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-brand transition-transform duration-150 ease-out will-change-transform dark:bg-brand-light"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
