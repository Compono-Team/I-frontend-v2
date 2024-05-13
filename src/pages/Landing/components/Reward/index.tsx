import ArrowIcon from 'assets/svg/common/arrow_right.svg?react';
import BoldArrowIcon from 'assets/svg/common/arrow_right_bold.svg?react';
import CouponIcon from 'assets/svg/Landing/coupon.svg?react';
import StarbucksIcon from 'assets/svg/Landing/starbucks.svg?react';
import QuestionIcon from 'assets/svg/Landing/question.svg?react';
import styles from './Reward.module.scss';

function RewardFirst() {
  return (
    <div className={styles.template}>
      <div className={styles.first}>
        <div className={styles.title}>
          That’s one small step for man,{'\n'}
          one giant leap for AXYZ.
        </div>
        <div className={styles.subTitle}>
          AXYZ 프로토타입 버전을 체험하며 개선 아이디어 제안 · 사용 경험 피드백 · 버그 리포팅을 도와주실 베타테스터를 모십니다.
        </div>
        <div className={styles.first__block}>
          <div className={styles.block}>
            <div className={styles.block__title}>베타테스터 모집 개요</div>
            <div className={styles.block__text}>
              모집 기간 : 2024. 04. 27 - 2024. 05. 12{'\n'}
              1차 CBT 활동 기간 : 2024. 05. 13 ~ 2024. 05. 27{'\n'}
              2차 CBT 활동 기간 : TBD
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.block__title}>클로즈드 베타테스트 (CBT) 안내</div>
            <div className={styles.block__text}>
              모집 기간 : 2024. 04. 27 - 2024. 05. 12{'\n'}
              1차 CBT 활동 기간 : 2024. 05. 13 ~ 2024. 05. 27{'\n'}
              2차 CBT 활동 기간 : TBD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardSecond() {
  return (
    <div className={styles.template}>
      <div className={styles.second}>
        <div className={styles.recommend}>
          <div className={styles.recommend__title}>
            누구에게나 유용하지만{'\n'}
            이런 분들에게는 특히 좋아요!
          </div>

          <div className={styles.recommend__box}>
            <div className={styles['recommend__box--index']}>1</div>
            정착할 만큼 만족스러운 시간 관리{'\n'}
            서비스를 찾지 못하셨던 분
          </div>
          <div className={styles.recommend__box}>
            <div className={styles['recommend__box--index']}>2</div>
            누구에게나 유용하지만{'\n'}
            이런 분들에게는 특히 좋아요!
          </div>
          <div className={styles.recommend__box}>
            <div className={styles['recommend__box--index']}>3</div>
            누구에게나 유용하지만{'\n'}
            이런 분들에게는 특히 좋아요!
          </div>
        </div>

        <div className={styles.recommend}>
          <div className={styles.recommend__title}>
            베타테스트 참가자분들께{'\n'}
            이런 혜택을 드려요!
            <button
              className={styles.recommend__regist}
              type="button"
            >
              <div className={styles['recommend__regist--text']}>
                베타테스트 신청
              </div>
              <div className={styles['recommend__regist--icon']}>
                <ArrowIcon />
              </div>
            </button>
          </div>

          <div className={styles.recommend__section}>
            <CouponIcon />
            <div>
              정식 출시 및 구독제 서비스 전환 시{'\n'}
              베타 테스트에 참여했던 모든 분
            </div>
            <div className={styles['recommend__section--summary']}>
              <BoldArrowIcon />서비스 이용에 대한 특별 혜택 제공
            </div>
          </div>

          <div className={styles.recommend__section}>
            <StarbucksIcon />
            <div>
              베타 테스트 기간 내 가장 활발하게 {'\n'}
              의견을 남겨주신 상위 테스터 30 분
            </div>
            <div className={styles['recommend__section--summary']}>
              <BoldArrowIcon />스타벅스 아메리카노(T) 기프티콘 제공
            </div>
          </div>

          <div className={styles.recommend__section}>
            <QuestionIcon />
            <div>
              남겨주신 베타 테스트 피드백 내용들을{'\n'}
              종합적으로 고려한 최우수 테스터 3 분
            </div>
            <div className={styles['recommend__section--summary']}>
              <BoldArrowIcon />________________________제공
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default {
  First: RewardFirst,
  Second: RewardSecond,
};
