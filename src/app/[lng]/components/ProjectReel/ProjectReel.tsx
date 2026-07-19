import Image from 'next/image';
import { ProjectCardsData } from '@/data/projectCards';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';
import styles from './ProjectReel.module.scss';

// Larger hero screenshots for the same three projects (the data file's own
// images are 199x199 logos — too small to blow up full-bleed).
const HERO_IMAGES: Record<string, string> = {
  '1': '/projects/images/partnersCaptureA.png', // Partners
  '2': '/projects/images/launchCapture.png', // Launch
  '3': '/projects/images/trackerCaptureA.png' // Tracker
};

interface ProjectReelProps {
  localizedProjects: any;
  lang?: string;
}

const ProjectReel: React.FC<ProjectReelProps> = ({ localizedProjects, lang = 'es' }) => {
  const isEn = lang === 'en';
  const cta = isEn ? 'View project' : 'Ver proyecto';

  const combinedProjects = ProjectCardsData.map((project, index) => {
    const localizedProject =
      localizedProjects.projects && localizedProjects.projects[index]
        ? localizedProjects.projects[index]
        : {};
    return {
      id: project.id,
      title: localizedProject.title || project.title,
      description: localizedProject.description || project.description,
      link: project.extra?.link
    };
  });

  return (
    <section className={styles.reel}>
      <div className={globalStyles.container}>
        <Reveal>
          <h2 className={globalStyles.section__title}>{localizedProjects.title}</h2>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {combinedProjects.map((project, i) => (
          <article key={project.id} className={styles.slide}>
            <Image
              src={HERO_IMAGES[project.id]}
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
