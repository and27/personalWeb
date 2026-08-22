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
  const wordmark = 'Andrés Banda';
  const endsWithPeriod = title.trim().endsWith('.');
  const titleBody = title.trim().slice(0, -1);

  return (
    <main className={styles.masthead}>
      <div className={`${globalStyles.container} ${styles.masthead__container}`}>
        <header className={styles.masthead__content}>
          <Reveal delay={0}>
            <p className={styles.masthead__eyebrow}>{mantra}</p>
          </Reveal>
          <Reveal delay={0.08}>
            {/* The trailing period is its own element so the page thread can
                anchor itself to exactly where the sentence ends. */}
            <h1 className={styles.masthead__title}>
              {endsWithPeriod ? titleBody : title}
              {endsWithPeriod && <span data-thread-start>.</span>}
            </h1>
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
