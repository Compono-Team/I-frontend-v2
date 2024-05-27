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
  const [section, setSection] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSection(Math.round((window.scrollY / window.innerHeight) * 100) / 100);
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
      <div className={styles.header} style={{ opacity: section >= 1 ? 1 : 0 }}>
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
          onClick={handleBetatestClick}
          className={styles['header__pre-reserve']}
          type="button"
        >
          베타테스트 신청 <ArrowIcon />
        </button>
      </div>
      <div className={styles.content}>
        <div
          className={styles.content__section}
          style={{ opacity: section < 1 ? 1 : 0 }}
        >
          <FirstPage />
        </div>
        <div
          className={styles.content__section}
          style={{ opacity: section < 2 && section >= 1 ? 1 : 0 }}
        >
          <SecondPage />
        </div>
        <div
          className={styles.content__section}
          style={{ opacity: section < 3 && section >= 2 ? 1 : 0 }}
        >
          <ThirdPage />
        </div>
        <div
          className={styles.content__section}
          style={{ opacity: section < 8 && section >= 3 ? 1 : 0 }}
        >
          <ForthPage section={section} />
        </div>
        <div
          className={styles.content__section}
          style={{ opacity: section < 9 && section >= 8 ? 1 : 0 }}
        >
          <Reward.First />
        </div>
        <div
          className={styles.content__section}
          style={{ opacity: section >= 9 ? 1 : 0 }}
        >
          <Reward.Second />
        </div>
      </div>
    </div>
  );
}
