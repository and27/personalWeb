'use client';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import paylinkScreen from '../../../../../../public/projects/images/paylinkCapture.png';
import launchScreen from '../../../../../../public/projects/images/launchCaptureA.png';
import partnersScreen from '../../../../../../public/projects/images/partnersCaptureA.png';
import codercatScreen from '../../../../../../public/projects/images/codercatCaptureA.png';
import trackerScreen from '../../../../../../public/projects/images/trackerCaptureA.png';
import { useEffect, useRef, useState } from 'react';
import techIcons from '@/lib/techIcons';
import TechIcon from '../../TechIcon/TechIcon';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const projectImages = [
    paylinkScreen,
    partnersScreen,
    launchScreen,
    codercatScreen,
    trackerScreen
  ];
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${isEven ? styles.left : styles.right} ${
        isVisible ? styles.visible : ''
      }`}
    >
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
            {project.technologies.map((tech: string, idx: string) => {
              const t = techIcons[tech.toLowerCase()];
              return (
                <div key={idx} className="w-6 h-6">
                  {t ? <TechIcon icon={t.icon} label={t.label} /> : tech}
                </div>
              );
            })}
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
