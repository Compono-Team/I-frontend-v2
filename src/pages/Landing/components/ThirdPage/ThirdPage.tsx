import Orbital from 'assets/svg/Landing/orbital.svg?react';
import styles from './ThirdPage.module.scss';

export default function ThirdPage() {
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.content__title}>
          ALL-GANIZE
        </div>
        <div className={styles.content__phrase}>
          AXYZ는 <span>할 일에 시간과 공간을 기록하여 일상을 온전히 기록</span>하고{'\n'}
          시간관리 이론을 바탕으로한 세분화된 기능과 매체들까지 모든 것을{'\n'}
          고민하고, 담아내고자 합니다.{'\n\n'}
          더 나아가서는 일상을 보내며 만들어진 <span>나의 라이프 스타일 데이터와</span>{'\n'}
          <span>AI를 접목시켜  빈틈없는 하루를 보낼 수 있도록 도와주는 능동적인</span>{'\n\n'}
          <span>시간관리 서비스</span>를 목표로 합니다.{'\n'}
        </div>
      </div>
      <div className={styles.image}>
        <Orbital />
      </div>
    </div>
  );
}
