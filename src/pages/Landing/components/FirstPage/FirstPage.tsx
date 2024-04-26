import Logo from 'assets/svg/Logo/logo.svg?react';
import Arrow from 'assets/svg/common/arrow_right.svg?react';
import LogoPhrase from 'assets/svg/Logo/logo_phrase.svg?react';
import PhoneLeft from 'assets/image/Landing/phone_left.png';
import PhoneRight from 'assets/image/Landing/phone_right.png';
import styles from './FirstPage.module.scss';

export default function FirstPage() {
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <Logo /><LogoPhrase />
          </div>
        </div>
        <div className={styles.title}>
          ALL THE TIME{'\n'}
          ALL-GANIZE
        </div>

        <div className={styles.bottom}>
          <div className={styles.phrase}>
            Time Management{'\n'}
            app service

            <div className={styles.phrase__sub}>with AI-powered Time Management Sync-Copilot</div>
          </div>
          <button className={styles.assign} type="button">
            베타테스트 신청
            <Arrow />
          </button>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.banner__circle} />
        <img
          className={styles['banner__image-left']}
          src={PhoneLeft}
          alt="mobile_left"
        />
        <img
          className={styles['banner__image-right']}
          src={PhoneRight}
          alt="mobile_left"
        />
      </div>
    </div>
  );
}
