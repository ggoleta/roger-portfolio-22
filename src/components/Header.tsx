import styles from './Header.module.css';
import {TwitterLogo, GithubLogo} from 'phosphor-react'

export function Header() {
  return(
    <header className={styles.header}>
      <span className={styles.personalInfo}>
        <strong>Rogério Fernandes</strong>
        <span>Available - part-time jobs</span>
      </span>

      <span className={styles.social}>
        <TwitterLogo size={30} />
        <GithubLogo size={30} />
      </span>

    </header>
  );
}