'use client';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import techIcons from '@/lib/techIcons';
import TechIcon from '../../TechIcon/TechIcon';

const normalizeProjectImage = (image?: string) => {
  if (!image) return '/studioImage.png';
  if (image.startsWith('/projects/')) return image;
  if (image.startsWith('/images/')) {
    const filename = image.replace('/images/', '');
    const legacyMap: Record<string, string> = {
      'partners.png': 'partnersCaptureA.png',
      'paylinkCapture.png': 'paylinkCapture.png',
      'launchCapture.png': 'launchCaptureA.png',
      'codercatCapture.png': 'codercatCaptureA.png',
      'tracker.png': 'trackerCaptureA.png'
    };
    const normalized = legacyMap[filename] || filename;
    return `/projects/images/${normalized}`;
  }
  if (image.startsWith('/')) return image;
  return `/${image}`;
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const imageSrc = normalizeProjectImage(
    typeof project.image === 'string' ? project.image : project.image?.src
  );

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
          src={imageSrc}
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
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
