import styles from './Masthead.module.scss';
import globalStyles from '../../page.module.scss';

interface IMasthead {
  title: string;
  description: string;
  cta: string;
  lang: string;
}

const PersonalMasthead: React.FC<IMasthead> = ({ title, description, cta, lang }) => {
  return (
    <main className={styles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <h1 className={styles.masthead__title}>{title}</h1>
            <p className={styles.masthead__description}>{description}</p>
            <a className={styles.masthead__btn} href="/projects">
              {cta}
            </a>
          </header>
          <div className={styles.photo}></div>
        </div>
      </div>
    </main>
  );
};

export default PersonalMasthead;
