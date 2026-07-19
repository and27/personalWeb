import Image from 'next/image';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';
import styles from './ProjectReel.module.scss';

export interface ReelProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ProjectReelProps {
  projects: ReelProject[];
  title?: string;
  lang?: string;
}

// Shared full-bleed reel presentation, reused by the home teaser (3
// projects) and the /projects page (full catalog) — same data shape, same
// visual grammar, one place to fix. First slide is a full-width "featured"
// treatment on desktop, the rest pair up — this also resolves any odd
// project count without an awkward lone half-width leftover.
const ProjectReel: React.FC<ProjectReelProps> = ({ projects, title, lang = 'es' }) => {
  const isEn = lang === 'en';
  const cta = isEn ? 'View project' : 'Ver proyecto';

  return (
    <section className={styles.reel}>
      {title && (
        <div className={globalStyles.container}>
          <Reveal>
            <h2 className={globalStyles.section__title}>{title}</h2>
          </Reveal>
        </div>
      )}

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <article key={project.id} className={styles.slide}>
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              loading="lazy"
              className={styles.slideImage}
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className={styles.scrim} aria-hidden="true" />
            <div className={styles.slideContent}>
              <Reveal>
                <span className={styles.slideNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.slideTitle}>{project.title}</h3>
                <p className={styles.slideDescription}>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.slideCta}
                  >
                    {cta}
                  </a>
                )}
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectReel;
