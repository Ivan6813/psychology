import styles from './achievements.module.css';

export const Achievements = () => (
  <div className={styles.achievements}>
    <div className={styles.achievement}>
      <div className={styles.quantity}>150+</div>
      <p className={styles.text}>сессий с&nbsp;клиентами</p>
    </div>
    <div className={styles.achievement}>
      <div className={styles.quantity}>200+</div>
      <p className={styles.text}>часов семинаров по&nbsp;практике</p>
    </div>
    <div className={styles.achievement}>
      <div className={styles.quantity}>5+</div>
      <p className={styles.text}>пройдено обучений</p>
    </div>
  </div>
);
