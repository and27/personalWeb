import styles from './Masthead.module.scss';
import globalStyles from '../../../page.module.scss';

interface IMasthead {
  title: string;
  description: string;
  cta: string;
  lang: string;
}

const Masthead: React.FC<IMasthead> = ({ title, description, cta, lang }) => {
  return (
    <main className={styles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <h1 className={styles.masthead__title}>
              {'Posiciona tu '}
              <span className={styles.masthead__title__highlight}>negocio, </span>
              {' atrae clientes'}
              {' y deja una '}
              <span className={styles.masthead__title__highlight}>huella.</span>
              👈
            </h1>
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
