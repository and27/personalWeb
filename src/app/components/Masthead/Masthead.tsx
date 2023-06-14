import styles from './Masthead.module.css';
import globalStyles from '../../page.module.css';

function Masthead() {
  return (
    <main className={globalStyles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <h1 className={styles.masthead__title}>
              Hi, I'm Andrés,
              <br /> Security & Web Developer.
            </h1>
            <p className={styles.masthead__description}>
              Taking your online presence to the next level with security-driven
              web applications.
            </p>
            <a className={styles.masthead__btn} href="#contact">
              Let's talk
            </a>
          </header>
          <div className={styles.photo}></div>
        </div>
      </div>
    </main>
  );
}

export default Masthead;
