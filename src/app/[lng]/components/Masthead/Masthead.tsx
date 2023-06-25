import styles from './Masthead.module.scss';
import globalStyles from '../../page.module.scss';

interface IMasthead {
  title: string;
  description: string;
  cta: string;
}
const Masthead: React.FC<IMasthead> = ({ title, description, cta }) => {
  return (
    <main className={globalStyles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <h1 className={styles.masthead__title}>{title}</h1>
            <p className={styles.masthead__description}>{description}</p>
            <a className={styles.masthead__btn} href="#contact">
              {cta}
            </a>
          </header>
          <div className={styles.photo}></div>
        </div>
      </div>
    </main>
  );
};

export default Masthead;
