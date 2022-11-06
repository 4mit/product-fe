import styles from './common-style.module.css';
import { useEffect, useRef } from 'react';

const ScrollIndicator = () => {
  const scrollIndicatorRef = useRef(null);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      let { scrollTop, scrollHeight, clientHeight, clientWidth } =
        document.documentElement;
      console.log(scrollTop, scrollHeight, clientHeight, clientWidth);
      let p3 = scrollTop / (scrollHeight - clientHeight);
      p3 = Math.round(p3 * 100);
      if (scrollIndicatorRef.current != null)
        scrollIndicatorRef.current.style.width = p3 + '%';
    });
    return () => {};
  }, []);

  return (
    <div
      className={styles.scrollIndicator + ' shadow-md'}
      ref={scrollIndicatorRef}
    ></div>
  );
};

export default ScrollIndicator;
