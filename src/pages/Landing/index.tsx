import LogoIcon from 'assets/svg/Logo/logo.svg?react';
import ArrowIcon from 'assets/svg/common/arrow_right.svg?react';
import FirstPage from 'pages/Landing/components/FirstPage/FirstPage';
import { useEffect, useRef, useState } from 'react';
import cn from 'utils/ts/className';
import styles from './Landing.module.scss';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';

export default function Landing() {
  const [section, setSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<number>(0);

  const handleSection = (value: number) => {
    const content = contentRef.current;
    sectionRef.current = value;
    setSection(value);
    if (content)content.scrollLeft = window.innerWidth * value;
  };

  useEffect(() => {
    const content = contentRef?.current;
    let isMoving = false;

    const handleWheel = (e:WheelEvent) => {
      if (!isMoving && content && e.deltaY > 0) {
        isMoving = true;
        sectionRef.current = sectionRef.current === 5 ? 5 : sectionRef.current + 1;
        setSection(sectionRef.current);
        content.scrollLeft = window.innerWidth * sectionRef.current;
        setTimeout(() => { isMoving = false; }, 1000);
      }

      if (!isMoving && content && e.deltaY < 0) {
        isMoving = true;
        sectionRef.current = sectionRef.current === 0 ? 0 : sectionRef.current - 1;
        setSection(sectionRef.current);
        content.scrollTo({ left: window.innerWidth * sectionRef.current, behavior: 'smooth' });
        setTimeout(() => { isMoving = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={styles.layout} ref={contentRef}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <LogoIcon />
        </div>
        <div className={styles.header__progress}>
          <button type="button" onClick={() => handleSection(0)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 0,
            })}
            />
          </button>
          <button type="button" onClick={() => handleSection(1)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 1,
            })}
            />
          </button>
          <button type="button" onClick={() => handleSection(2)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 2,
            })}
            />
          </button>
          <button type="button" onClick={() => handleSection(3)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 3,
            })}
            />
          </button>
          <button type="button" onClick={() => handleSection(4)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 4,
            })}
            />
          </button>
          <button type="button" onClick={() => handleSection(5)}>
            <div className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section === 5,
            })}
            />
          </button>
        </div>

        <button
          className={styles['header__pre-reserve']}
          type="button"
          onClick={() => contentRef?.current?.scrollTo({ left: window.innerWidth })}
        >
          베타테스트 신청 <ArrowIcon />
        </button>
      </div>
      <div className={styles.content}>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <SecondPage />
        <SecondPage />
        <SecondPage />
      </div>
    </div>
  );
}
