import styles from './Masthead.module.scss';
import globalStyles from '../../page.module.scss';

interface IMasthead {
  title: string;
  description: string;
  cta: string;
  lang: string;
}

const PersonalMasthead: React.FC<IMasthead> = ({ title, description, cta, lang }) => {
  const isEn = lang === 'en';
  const eyebrow = isEn
    ? 'Andrés Banda · Software Engineer'
    : 'Andrés Banda · Ingeniero de Software';
  const secondaryCta = isEn ? "Let's talk" : 'Hablemos';

  return (
    <main className={styles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <p className={styles.masthead__eyebrow}>{eyebrow}</p>
            <h1 className={styles.masthead__title}>{title}</h1>
            <p className={styles.masthead__description}>{description}</p>
            <div className={styles.masthead__actions}>
              <a className={styles.masthead__btn} href="/projects">
                {cta}
              </a>
              <a className={styles.masthead__btnGhost} href="#contact">
                {secondaryCta}
              </a>
            </div>
          </header>
          <div className={styles.photo}></div>
        </div>
      </div>
    </main>
  );
};

export default PersonalMasthead;
