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
  const eyebrow = isEn ? 'Software Engineer' : 'Ingeniero de Software';
  const secondaryCta = isEn ? 'Contact' : 'Contacto';
  const availability = isEn ? 'Available for projects' : 'Disponible para proyectos';
  const location = isEn ? 'Ecuador · Remote' : 'Ecuador · Remoto';

  return (
    <main className={styles.masthead}>
      <span className={styles.masthead__glyph} aria-hidden="true">
        *
      </span>
      <div className={globalStyles.container}>
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
          <p className={styles.masthead__meta}>
            <span className={styles.masthead__availability}>
              <span className={styles.masthead__dot} aria-hidden="true" />
              {availability}
            </span>
            <span>{location}</span>
          </p>
        </header>
      </div>
    </main>
  );
};

export default PersonalMasthead;
