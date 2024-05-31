import styles from './termsModal.module.scss';

type TProps = {
  onClose: () => void;
};

function TermsModal({ onClose }: TProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>개인 정보 수집 및 이용 약관</h2>
          <button type="button" className={styles.closeIcon} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.content}>
            AXYZ는 「개인정보 보호법」에 따라 동의를
            얻어 본 설문과 관련하여 수집한 정보를 관리함에 있습니다. 이용자가
            제공한 모든 정보는 다음의 목적을 위해 활용하며 이외의 용도로는
            사용되지 않습니다.
          </div>
          <ul>
            <li>목적: 베타테스트 정보 공지</li>
            <li>항목: 성명,전화번호, 이메일 주소</li>
            <li>개인 정보 보유 및 이용 기간: 신청자의 수신 거부 요청 시까지</li>
            <li>
              수집근거 : 「개인정보 보호법」 제 15조 제1항 귀하는 개인정보
              제공에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 거부한
              내용 관련 서비스를 받을 수 없습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TermsModal;
