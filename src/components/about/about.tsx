import mainPhoto from './assets/main.png';
import styles from './about.module.css';

export const About = () => (
  <div className={styles.about}>
    <div className={styles.info}>
      <div className={styles.fullName}>
        <div className={styles.firstName}>Елена</div>
        <div className={styles.lastName}>Целуйко</div>
      </div>
      <p className={styles.discription}>
        Практикующий психолог, в&nbsp;профессии&nbsp;с&nbsp;2017&nbsp;года.
      </p>
      <button className={styles.signUpButton}>Записаться</button>
    </div>
    <div className={styles.mainPhoto}>
      <img src={mainPhoto} alt='main photo' />
    </div>
  </div>
);
