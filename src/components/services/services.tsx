import styles from './services.module.css';

export const Services = () => (
  <div className={styles.services}>
    <div className={styles.title}>С&nbsp;какими запросами ко&nbsp;мне обращаются:</div>
    <ul className={styles.servicesList}>
      <li className={styles.servicesItem}>Отношения</li>
      <li className={styles.servicesItemPink}>Самооценка</li>
      <li className={styles.servicesItem}>Принятие себя</li>
      <li className={styles.servicesItemGrey}>Решения и&nbsp;выборы</li>
      <li className={styles.servicesItem}>Проживание кризисов</li>
      <li className={styles.servicesItemGrey}>Отношения с&nbsp;родителями</li>
    </ul>
    <p className={styles.subTitle}>
      /Я работаю только со&nbsp;взрослыми, которые готовы к&nbsp;изменениям/
    </p>
    <div className={styles.title}>Ко&nbsp;мне&nbsp;приходят, когда:</div>
    <ul className={styles.specializationList}>
      <li>/ есть непонимание или неудовлетворенность в&nbsp;отношениях с&nbsp;близкими людьми</li>
      <li>/ сложно понять себя, свои потребности и&nbsp;желания</li>
      <li>/ есть ощущение тупика и&nbsp;нет понимания, куда двигаться дальше</li>
      <li>/ сложно делать выбор и&nbsp;принимать решения</li>
      <li>/ нет внутренней устойчивости и&nbsp;опоры</li>
      <li>/ нет чувства удовольствия и&nbsp;наполненности жизни</li>
    </ul>
  </div>
);
