import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';
import styles from './app.module.css';

export const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
);
