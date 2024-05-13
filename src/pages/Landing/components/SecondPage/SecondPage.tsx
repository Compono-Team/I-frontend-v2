import Cordinate from 'assets/svg/Landing/xyz.svg?react';
import styles from './SecondPage.module.scss';

export default function SecondPage() {
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.content__title}>
          ALL THE TIME
        </div>
        <div className={styles.content__phrase}>
          주변에서 흔히 사용되는 시간 관리 서비스는{'\n'}
          왜 시간에만 초점을 맞출까요?{'\n\n'}
          <span>시간과 공간은 결코 독립적일 수 없습니다.</span>{'\n'}
          시공간이라는 개념으로 연결되어 있는 관계이기 때문입니다.{'\n\n'}
          AXYZ는, <span>시간은 공간의 흐름이고 공간은 시간의 내용</span>이기 때문에{'\n'}
          공간이 결여된 시간은 온전한 정보를 담을 수 없다고 생각합니다.
        </div>
      </div>
      <div className={styles.image}>
        <Cordinate />
      </div>
    </div>
  );
}
