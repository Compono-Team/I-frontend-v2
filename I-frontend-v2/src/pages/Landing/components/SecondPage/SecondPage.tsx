import { ReactComponent as Cordinate } from 'assets/svg/Landing/xyz.svg';
import styles from './SecondPage.module.scss';

export default function SecondPage() {
  return (
    <div className={styles.template}>
      <div className={styles.left} />
      <div className={styles.right}>
        <div className={styles.title}>
          All the time
        </div>
        <div className={styles.content}>
          <Cordinate />
          <div className={styles.content__phrase}>
            주변에서 흔히 사용되고 알려진{'\n'}
            시간 관리 서비스는 왜 시간에만 초점을 맞출까요?{'\n\n'}
            <span>시간</span>과 <span>공간</span>은 결코 독립적일 수 없습니다.{'\n'}
            <span>시공간이라는 개념으로 연결되어 있는 관계</span>이기 때문입니다.{'\n\n'}
            AXYZ는, 시간은 공간의 흐름이고 공간은 시간의 내용이기 때문에{'\n'}
            공간이 결여된 시간은 온전한 정보를 담을 수 없다고 생각합니다.
          </div>
        </div>
      </div>
    </div>
  );
}
