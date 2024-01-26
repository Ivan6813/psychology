import taskPhoto from './assets/task-photo.png';
import styles from './my-task.module.css';

export const MyTask = () => (
  <div className={styles.task}>
    <div className={styles.taskPhoto}>
      <img src={taskPhoto} alt='task photo' />
    </div>
    <p className={styles.taskText}>
      <span className={styles.introduction}>“Моя задача</span> как психолога заключается в том,
      чтобы помочь вам увидеть вашу ситуацию более ясно, увидеть себя как часть этой ситуации и
      попробовать найти <span>новые решения</span> или <span>способы обращения</span> с
      трудностями.”
    </p>
  </div>
);
