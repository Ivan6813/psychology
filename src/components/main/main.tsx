import { About } from '../about';
import styles from './main.module.css';

export const Main = () => (
  <div className={styles.main}>
    <div className='container'>
      <About />
    </div>
  </div>
);
