import { About } from '../about';
import { Achievements } from '../achievements';
import styles from './main.module.css';

export const Main = () => (
  <main className={styles.main}>
    <div className='container'>
      <About />
      <Achievements />
    </div>
  </main>
);
