import PhoneLeft from 'assets/image/Landing/phone_left.png';
import PhoneRight from 'assets/image/Landing/phone_right.png';
import ArrowIcon from 'assets/svg/common/arrow_right.svg?react';
import { useNavigate } from 'react-router-dom';
import styles from './FirstPage.module.scss';

export default function FirstPage() {
  const navigate = useNavigate();

  const handleBetatestClick = () => {
    navigate('/betatest');
  };
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.title}>
          ALL THE TIME{'\n'}
          ALL-GANIZE
          <div className={styles.title__sub}>
            AXYZ is Your Own{'\n'} Time Management Copilot
          </div>
        </div>
        <div className={styles.bottom}>
          <button
            className={styles.assign}
            onClick={handleBetatestClick}
            type="button"
          >
            베타테스트 신청하기
            <ArrowIcon />
          </button>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.banner__circle} />
        <div className={styles.banner__phone}>
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
    </div>
  );
}
