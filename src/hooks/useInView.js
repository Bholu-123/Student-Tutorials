import { useEffect, useRef, useState } from 'react';

const defaultRootMargin = '100px 0px 100px 0px';

/**
 * Tracks whether the element is intersecting the viewport. Keeps observing so
 * entrance animations can run again each time the user scrolls back to the section.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { threshold = 0.12, rootMargin = defaultRootMargin } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
