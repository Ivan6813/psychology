import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className='container'>
      <div className={styles.footerWrap}>
        <div className=''>
          <div className=''>ИП Целуйко Елена Владимировна</div>
          <div className=''>УНП 491567905</div>
        </div>
        <ul className={styles.socialMedia}>
          <li className={styles.navItem}>
            <a href='#'>Instagram</a>
          </li>
          <li className={styles.navItem}>
            <a href='#'>Telegram</a>
          </li>
          <li className={styles.navItem}>
            <a href='#'>Viber</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
