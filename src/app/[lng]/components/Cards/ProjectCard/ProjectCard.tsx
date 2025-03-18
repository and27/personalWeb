import styles from './ProjectCard.module.scss';
import { SiJavascript, SiNextdotjs, SiReact } from 'react-icons/si';
import Image from 'next/image';

const techIcons: { [key: string]: JSX.Element } = {
  javascript: <SiJavascript />,
  'next.js': <SiNextdotjs />,
  react: <SiReact />
};
import launchScreen from '../../../../../../public/projects/images/launchCaptureA.png';
import partnersScreen from '../../../../../../public/projects/images/partnersCaptureA.png';
import codercatScreen from '../../../../../../public/projects/images/codercatCaptureA.png';
import trackerScreen from '../../../../../../public/projects/images/trackerCaptureA.png';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const projectImages = [partnersScreen, launchScreen, codercatScreen, trackerScreen];

  return (
    <div className={`${styles.projectCard} ${isEven ? styles.left : styles.right}`}>
      <div className={styles.projectCard__image}>
        <Image
          src={projectImages[index] || project.image}
          alt={`Vista previa de ${project.title}`}
          className={styles.projectCard__img}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
          unoptimized
        />
      </div>
      <div className={styles.projectCard__content}>
        <div className={styles.projectCard__titleContainer}>
          <span className={styles.projectCard__category}>{project.category}</span>
          <div className={styles.projectCard__techStack}>
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className={styles.projectCard__tech}>
                {techIcons[tech.toLowerCase()] || tech}
              </span>
            ))}
          </div>
        </div>
        <h2 className={styles.projectCard__title}>{project.title}</h2>
        <p className={styles.projectCard__description}>{project.description}</p>

        <ul className={styles.projectCard__impact}>
          {project.impact.map((point: string, idx: number) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* <p className={styles.projectCard__contributors}>
          <strong>Contribuidores:</strong> {project.contributors.join(', ')}
        </p> */}

        <div className={styles.projectCard__buttons}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard__btn}
          >
            {project.cta}
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard__github}
            >
              GitHub Repo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
