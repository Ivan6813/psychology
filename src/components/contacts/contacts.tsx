import styles from './contacts.module.css';

export const Contacts = () => (
  <div className={styles.contacts}>
    <div className={styles.questions}>Остались вопросы? Напишите&nbsp;мне!</div>
    <div className={styles.socialMediaList}>
      <div className={styles.socialMediaItem}>telegram</div>
      <div className={styles.socialMediaItem}>Instagram</div>
    </div>
  </div>
);
