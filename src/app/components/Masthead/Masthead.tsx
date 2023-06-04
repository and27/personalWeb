import styles from './Masthead.module.css';
import globalStyles from "../../page.module.css"

function Masthead() {
  return (
    <main className={globalStyles.masthead}>
    <div className={globalStyles.container}>
      <div className={styles.masthead__inner}>
        <header className={styles.masthead__content}>
          <h1 className={styles.masthead__title}>Hi, I'm Andrés,<br/> Web Developer.</h1>
          <p className={styles.masthead__description}>I contribute to startups and technology-based companies to create, maintain and optimize digital products. Currently, I'm focused on mastering frontend development to build incredible digital experiences.</p>
          <button className={styles.masthead__btn}>Let's talk</button>
        </header>
        <div className={styles.photo}></div>
      </div>
   </div>
  </main>
  );
}

export default Masthead;
