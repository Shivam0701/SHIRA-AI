import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Agar hash hai (#about, #services), to usko handle hone do
    if (hash) return;

    // 🔥 DOM paint se pehle hi top pe le jao
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
