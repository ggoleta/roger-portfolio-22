import styles from './About.module.css';
import { HandPointing } from 'phosphor-react'

export function About() {
  return(
    <div className={styles.about}>
      <h1>šš½ Hi, Iām Roger</h1>
      <p className={styles.description}>Iām a <strong>Front-End Developer</strong> with a passion for participate in every stage of digital product, from discovery to delivery. Helping to focus the business goals on users.</p>
      <div className={styles.goals}>
        <p>Iām looking for new opportunities to improve my <span className={styles.warning}>ReactJS skills</span>.</p>
        <div>
          <p>Working remotely from <span className={styles.warning}>Brazil</span></p>
          <span className={styles.warning}>roger.devreact@gmail.com</span>
        </div>
      </div>
      <div className={styles.checkjobs}>
        <span>šš½</span>
        <p> Check some <span className={styles.warning}>projects/labs</span></p>
      </div>
    </div>
  );
}