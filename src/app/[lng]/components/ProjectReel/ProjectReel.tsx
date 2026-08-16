import Image from 'next/image';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';
import styles from './ProjectReel.module.scss';

export interface ReelProject {
  id: string;
  title: string;
  image: string;
  link?: string;
}

interface ProjectReelProps {
  projects: ReelProject[];
  title?: string;
}

// Contained mosaic gallery, reused by the home teaser and the /projects page.
// Deliberately spare, matching the abstudio gallery this is modelled on: the
// screenshot carries the card and the only text is the project name. The whole
// card is the link, so nothing is lost by dropping the separate CTA.
const ProjectReel: React.FC<ProjectReelProps> = ({ projects, title }) => {
  return (
    <section className={styles.reel}>
      <div className={globalStyles.container}>
        {title && (
          <Reveal>
            <h2 className={globalStyles.section__title}>{title}</h2>
          </Reveal>
        )}

        <div className={styles.grid}>
          {projects.map(project => {
            const Card = project.link ? 'a' : 'article';
            return (
              <Card
                key={project.id}
                className={styles.slide}
                {...(project.link
                  ? { href: project.link, target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  loading="lazy"
                  className={styles.slideImage}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className={styles.scrim} aria-hidden="true" />
                <h3 className={styles.slideTitle}>{project.title}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectReel;
