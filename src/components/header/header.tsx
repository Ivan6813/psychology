import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className='container'>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href='/'>Elen Tseluiko</a>
          </li>
          <li className={styles.navItem}>
            <a href='/'>Услуги</a>
          </li>
          <li className={styles.navItem}>
            <a href='/'>Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
