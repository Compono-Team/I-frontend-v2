import cn from 'utils/ts/className';
import { useEffect, useRef } from 'react';
import FirstImage from 'assets/svg/Landing/first_info.svg?react';
import SecondImage from 'assets/svg/Landing/second_info.svg?react';
import ThirdImage from 'assets/svg/Landing/third_info.svg?react';
import styles from './ForthPage.module.scss';

interface Props {
  section: number;
}

export default function ForthPage({ section }: Props) {
  const pageRef = useRef<HTMLDivElement>(null);

  const handleSection = () => {
    if (Math.floor(section - 3) < 0) return 0;
    if (Math.floor(section - 3) > 4) return 4;
    return Math.floor(section - 3);
  };

  useEffect(() => {
    const page = pageRef?.current;

    const currentSection = () => {
      if (Math.floor(section - 3) < 0) return 0;
      if (Math.floor(section - 3) > 4) return 4;
      return Math.floor(section - 3);
    };
    if (page) {
      page.scrollLeft = pageRef.current.clientWidth * currentSection();
    }
  }, [section]);

  return (
    <div
      className={styles.template}
    >
      <div className={styles.navigator}>
        <div
          className={styles.navigator__selector}
          style={{ left: `${handleSection() * 20}%` }}
        />
        <button
          className={cn({
            [styles.navigator__tab]: true,
            [styles['navigator__tab--selected']]: (section >= 3 && section < 4),
          })}
          type="button"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 3,
            });
          }}
        >
          All-in-one
        </button>
        <button
          className={cn({
            [styles.navigator__tab]: true,
            [styles['navigator__tab--selected']]: (section >= 4 && section < 5),
          })}
          type="button"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 4,
            });
          }}
        >
          Auto-time-line
        </button>
        <button
          className={cn({
            [styles.navigator__tab]: true,
            [styles['navigator__tab--selected']]: (section >= 5 && section < 6),
          })}
          type="button"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 5,
            });
          }}
        >
          AI-support
        </button>
        <button
          className={cn({
            [styles.navigator__tab]: true,
            [styles['navigator__tab--selected']]: (section >= 6 && section < 7),
          })}
          type="button"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 6,
            });
          }}
        >
          Time-prediction
        </button>
        <button
          className={cn({
            [styles.navigator__tab]: true,
            [styles['navigator__tab--selected']]: (section >= 7 && section < 8),
          })}
          type="button"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 7,
            });
          }}
        >
          Image-recognize
        </button>
      </div>
      <div className={styles.pages} ref={pageRef}>
        <div className={cn({
          [styles.page]: true,
          [styles['page--open']]: (section >= 3 && section < 4),
          [styles['page--close']]: !(section >= 3 && section < 4),
        })}
        >
          <div className={styles.photo}>
            <FirstImage />
          </div>
          <div className={styles.phrase}>
            <div>
              타임라인 · 투두리스트 · 캘린더 · 등 시간 관리를 위해 사용해왔던 서비스들{'\n'}
              이제는 AXYZ 하나만으로 <span>모든 것이 완벽하게 연동되는 시스템을 사용해 보세요</span>
            </div>
          </div>
        </div>

        <div className={cn({
          [styles.page]: true,
          [styles['page--open']]: (section >= 4 && section < 5),
          [styles['page--close']]: !(section >= 4 && section < 5),
        })}
        >
          <div className={cn({
            [styles.photo]: true,
            [styles['photo--bottom']]: true,
          })}
          >
            <SecondImage />
          </div>
          <div className={styles.phrase}>
            <div>
              <span>공간의 변화</span>와 <span>시간의 흐름</span>을 기반으로 <span>자동으로 타임라인을 만들어요.</span>{'\n'}
              이를 통해 여러분의 치열했던 하루를 정리해요.
            </div>
          </div>
        </div>

        <div className={cn({
          [styles.page]: true,
          [styles['page--open']]: (section >= 5 && section < 6),
          [styles['page--close']]: !(section >= 5 && section < 6),
        })}
        >
          <div className={cn({
            [styles.photo]: true,
            [styles['photo--bottom']]: true,
          })}
          >
            <ThirdImage />
          </div>
          <div className={styles.phrase}>
            <div>
              무한한 가능성이 기대되는 AXYZ의 Sync-Copilot이  <span>간단한 할 일 추천이나 마감, </span>{'\n'}
              <span>시작 예정인 할 일</span>들을 알려줘요. 나중에는 더욱 고도화되고 최적화된 기능으로 찾아 뵐 예정이에요.
            </div>
          </div>
        </div>

        <div className={cn({
          [styles.page]: true,
          [styles['page--column']]: true,
          [styles['page--open']]: (section >= 6 && section < 7),
          [styles['page--close']]: !(section >= 6 && section < 7),
        })}
        >
          <div className={styles.update}>
            <div className={styles.update__title}>업데이트 예정 <span>01</span></div>
            <div className={styles.phrase}>
              <div>
                앞으로 해야 하는 할 일들 그저 기록만 하고 계시진 않으신가요?{'\n'}
                개개인 예상 소요시간을 <span>추정하고 실제 수행 시간과 대조하여 진정한 시간 관리를 할 수 있게끔 교정해</span> 드려요
              </div>
            </div>
          </div>
        </div>
        <div className={cn({
          [styles.page]: true,
          [styles['page--column']]: true,
          [styles['page--open']]: (section >= 7 && section < 8),
          [styles['page--close']]: !(section >= 7 && section < 8),
        })}
        >
          <div className={styles.update}>
            <div className={styles.update__title}>업데이트 예정 <span>01</span></div>
            <div className={styles.phrase}>
              <div>
                앞으로 해야 하는 할 일들 그저 기록만 하고 계시진 않으신가요?{'\n'}
                개개인 예상 소요시간을 <span>추정하고 실제 수행 시간과 대조하여 진정한 시간 관리를 할 수 있게끔 교정해</span> 드려요
              </div>
            </div>
          </div>
          <div className={styles.update}>
            <div className={styles.update__title}>업데이트 예정 <span>02</span></div>
            <div className={styles.phrase}>
              <div>
                일상의 순간이 담긴 사진 속<span>텍스트부터 시간, 장소, 이벤트 성격까지 분석한 후 자동으로 인식하여 사용자의 </span>{'\n'}
                <span>일정으로 등록</span>할 수 있어요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
