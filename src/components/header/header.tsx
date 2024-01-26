import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className='container'>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href='/psychology'>Elen Tseluiko</a>
          </li>
          <li className={styles.navItem}>
            <a href='/psychology'>Услуги</a>
          </li>
          <li className={styles.navItem}>
            <a href='/psychology'>Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
