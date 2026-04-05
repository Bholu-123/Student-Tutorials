import { useEffect, useState } from 'react';

export const useScrollTop = (threshold = 200) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(document.documentElement.scrollTop > threshold);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return { visible, scrollToTop };
};
