import styles from './Masthead.module.scss';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';

interface IMasthead {
  title: string;
  description: string;
  cta: string;
  lang: string;
}

const PersonalMasthead: React.FC<IMasthead> = ({ title, description, cta, lang }) => {
  const isEn = lang === 'en';
  const mantra = isEn ? 'Create · Experiment · Repeat' : 'Crea · Experimenta · Repite';
  const secondaryCta = isEn ? "Let's talk" : 'Hablemos';
  const location = isEn ? 'Ecuador · Remote' : 'Ecuador · Remoto';
  const wordmark = 'Andrés Banda';

  return (
    <main className={styles.masthead}>
      <div className={`${globalStyles.container} ${styles.masthead__container}`}>
        <header className={styles.masthead__content}>
          <Reveal delay={0}>
            <p className={styles.masthead__eyebrow}>{mantra}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.masthead__title}>{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.masthead__description}>{description}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className={styles.masthead__actions}>
              <a className={styles.masthead__btn} href="/projects">
                {cta}
              </a>
              <a className={styles.masthead__btnGhost} href="#contact">
                {secondaryCta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className={styles.masthead__meta}>
              <span>{location}</span>
            </p>
          </Reveal>
        </header>
      </div>

      {/* Oversized name as a graphic layer: outline only, cropped by the
          viewport edges and the fold. Static — decorative, so it's hidden
          from assistive tech; the real name lives in the nav and metadata. */}
      <div className={styles.masthead__nameband} aria-hidden="true">
        <span className={styles.masthead__wordmark}>{wordmark}</span>
      </div>
    </main>
  );
};

export default PersonalMasthead;
