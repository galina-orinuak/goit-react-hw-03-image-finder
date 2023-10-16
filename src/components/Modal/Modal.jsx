import styles from './Modal.module.css';

export const Modal = ({showImg, hideModal}) => {
    return (
<div className={styles.overlay} onClick={hideModal} >
  <div className={styles.modal}>
    <img src={showImg} alt="" className={styles.modalImg}/>
     </div>
</div>
    )}