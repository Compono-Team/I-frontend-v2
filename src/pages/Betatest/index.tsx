import { SubmitHandler, useForm } from 'react-hook-form';
import { getRegisterFormSchema } from 'validations/auth/registerValidation';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsModal from 'components/unit/betatest/TermsModal';
import ArrowLeftIcon from 'assets/svg/common/arrow_left.svg?react';
import { postPreApplication } from 'apis/preApplication';
import styles from './Betatest.module.scss';

function Betatest() {
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: getRegisterFormSchema() });
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleClick: SubmitHandler<{
    email: string;
    phone: string;
    name: string;
    terms: NonNullable<boolean | undefined>;
  }> = (data) => {
    const { phone, name, email } = data;
    const params = {
      phoneNumber: phone,
      name,
      email,
      expectation: '',
    };
    // postPreApplication(params);
  };

  const handleTermsClick = () => {
    setOpen((pre) => !pre);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBackClick = () => {
    navigate(-1);
  };

  const formatPhoneNumber = (phoneValue: string) => {
    const cleaned = `${phoneValue}`.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    if (match) {
      return [match[1], match[2], match[3]].join('-');
    }
    return phoneValue;
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, ''); // 숫자가 아닌 문자 제거
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
    setValue('phone', formattedValue);
  };

  const getFirstErrorMessage = () => {
    if (errors.email) return errors.email.message;
    if (errors.phone) return errors.phone.message;
    if (errors.name) return errors.name.message;
    if (errors.terms) return errors.terms.message;
    return null;
  };
  return (
    <div className={styles.container}>
      <button type="button" className={styles.backNav}>
        <ArrowLeftIcon onClick={handleBackClick} />
      </button>

      <article className={styles.contentsWrapper}>
        <div className={styles.mainContents}>
          <h1>
            THAT&apos;S ONE SMALL STEP FOR MAN
            <div className={styles.lineBreak}>ONE GIANT LEAP FOR AXYZ</div>
          </h1>
        </div>
        <div className={styles.mainContents2}>
          <h1>AXYZ에서 베타테스터를 모집합니다.</h1>
        </div>
      </article>
      <hr className={styles.diver} />
      <article className={styles.descContainer}>
        <article className={styles.descWrapper}>
          <section className={styles.betaActiveWrapper}>
            <header className={styles.header}>베타테스트 활동 개요</header>
            <div className={styles.contentsWrapper}>
              <span>모집기간: 2024.05.20 (월) ~ 2024.06.28 (금)</span>
              <span>1차 CBT 활동 기간 : 2024-07-01 (월) ~ 2024.07.14 (일)</span>
              <span>2차 CBT 활동 기간 :TBD</span>
            </div>
          </section>
          <section className={styles.betaBenefitsWrapper}>
            <header className={styles.header}>베타테스트 활동 혜택</header>
            <ul className={styles.activeWrapper}>
              <li>베타테스트 참여자 전원 정식 출시 시 서비스 이용 헤택 제공</li>
              <li>상위 베타테스터 30분 스타벅스 아메리카노(T) 기프티콘 증정</li>
              <li>최우수 베타테스터 3분 _____ 증정</li>
            </ul>
          </section>
        </article>
        <article className={styles.registerFormContainer}>
          <header className={styles.header}>베타테스터 지원</header>
          <form className={styles.inputsForm}>
            <input
              type="text"
              placeholder="이름"
              className={`${styles.input} ${errors.name ? styles.error : ''}`}
              {...register('name')}
            />
            <input
              type="tel"
              placeholder="전화번호"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className={`${styles.input} ${errors.phone ? styles.error : ''}`}
            />
            <input
              type="text"
              placeholder="이메일 주소"
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              {...register('email')}
            />
            <div className={styles.checkoxWrapper}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="terms"
                {...register('terms')}
              />
              <button
                type="button"
                onClick={handleTermsClick}
                className={styles.termsButton}
              >
                개인 정보 수집 및 이용 약관 동의(필수)
              </button>
            </div>
          </form>
        </article>
      </article>
      <div className={styles.buttonWrapper}>
        {getFirstErrorMessage() && (
          <div style={{ color: 'red' }}>{getFirstErrorMessage()}</div>
        )}
        <button
          type="submit"
          className={styles.button}
          onClick={handleSubmit(handleClick)}
        >
          베타테스터 지원하기
        </button>
      </div>
      {open && <TermsModal onClose={handleClose} />}
    </div>
  );
}

export default Betatest;
