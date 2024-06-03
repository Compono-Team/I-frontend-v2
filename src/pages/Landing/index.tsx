import LogoIcon from 'assets/svg/Logo/logo.svg?react';
import ArrowIcon from 'assets/svg/common/arrow_right.svg?react';
import FirstPage from 'pages/Landing/components/FirstPage/FirstPage';
import { useEffect, useState } from 'react';
import cn from 'utils/ts/className';
import { useNavigate } from 'react-router-dom';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';
import ForthPage from './components/ForthPage/ForthPage';
import Reward from './components/Reward';
import styles from './Landing.module.scss';

export default function Landing() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [section, setSection] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let timeOut:NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeOut);
      setHeaderVisible(false);
      setSection(Math.round((window.scrollY / window.innerHeight) * 100) / 100);
      timeOut = setTimeout(() => setHeaderVisible(true), 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBetatestClick = () => {
    navigate('/betatest');
  };

  return (
    <div className={styles.layout}>
      <div className={cn({
        [styles.header]: true,
        [styles['header--visible']]: section >= 1,
        [styles['header--hidden']]: !headerVisible,
      })}
      >
        <div className={styles.header__logo}>
          <LogoIcon />
        </div>
        <div className={styles.header__progress}>
          <button
            className={cn({
              [styles.progress]: true,
              [styles['progress--now']]: section < 1,
            })}
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            HOME
          </button>
          <button
            className={cn({
              [styles.progress]: true,
              [styles['progress--selected']]: section >= 1 && section < 2,
            })}
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight * 1 })}
          >
            ABOUT
          </button>
          <button
            className={cn({
              [styles.progress]: true,
              [styles['progress--selected']]: section >= 2 && section < 3,
            })}
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight * 2 })}
          >
            FUNCTION
          </button>
          <button
            className={cn({
              [styles.progress]: true,
              [styles['progress--selected']]: section >= 3 && section < 8,
            })}
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight * 3 })}
          >
            INFO
          </button>
          <button
            className={cn({
              [styles.progress]: true,
              [styles['progress--selected']]: section >= 8,
            })}
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight * 8 })}
          >
            REWARD
          </button>
        </div>

        <button
          className={styles['header__pre-reserve']}
          onClick={handleBetatestClick}
          type="button"
        >
          베타테스트 신청 <ArrowIcon />
        </button>
      </div>
      <div className={styles.content}>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section < 1,
            [styles['content__section--close']]: !(section < 1),
          })}
        >
          <FirstPage />
        </div>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section < 2 && section >= 1,
            [styles['content__section--close']]: !(section < 2 && section >= 1),
          })}
        >
          <SecondPage />
        </div>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section < 3 && section >= 2,
            [styles['content__section--close']]: !(section < 3 && section >= 2),
          })}
        >
          <ThirdPage />
        </div>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section < 8 && section >= 3,
            [styles['content__section--close']]: !(section < 8 && section >= 3),
          })}
        >
          <ForthPage section={section} />
        </div>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section < 9 && section >= 8,
            [styles['content__section--close']]: !(section < 9 && section >= 8),
          })}
        >
          <Reward.First />
        </div>
        <div
          className={cn({
            [styles.content__section]: true,
            [styles['content__section--open']]: section >= 9,
            [styles['content__section--close']]: !(section >= 9),
          })}
        >
          <Reward.Second />
        </div>
      </div>
    </div>
  );
}
