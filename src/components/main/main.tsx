import { About } from '../about';
import { Achievements } from '../achievements';
import { Services } from '../services';
import { SignUpForm } from '../sign-up-form';
import styles from './main.module.css';

export const Main = () => (
  <main className={styles.main}>
    <div className='container'>
      <About />
      <Achievements />
      <Services />
      <SignUpForm />
    </div>
  </main>
);
