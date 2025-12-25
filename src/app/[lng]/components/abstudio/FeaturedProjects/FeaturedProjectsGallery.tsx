import FuturisticProjectCard from '../FuturisticProjectCard/FuturisticProjectCard';
import styles from './FeaturedProjectsGallery.module.scss';
import globalStyles from '../../../page.module.scss';
import codercatScreen from '@/../public/projects/images/codercatCaptureA.png';
import launchScreen from '@/../public/projects/images/launchCaptureA.png';
import payLink from '@/../public/projects/images/paylinkCapture.png';
import partnersScreen from '@/../public/projects/images/partnersCaptureA.png';

type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  impact: string[];
  contributors: string[];
  link: string;
  cta: string;
  github?: string;
  technologies: string[];
};

const FeaturedProjectsGallery = ({ projects, title }: { projects: Project[]; title: string }) => {
  const ProjectLimitCount = 4;
  const limitedProjects = projects.slice(0, ProjectLimitCount);
  return (
    <section className={globalStyles.projects} style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className={globalStyles.section__title}>{title}</h2>
      <div className={globalStyles.container}>
        <div className={styles.gallery}>
          <div className={styles.grid}>
            {limitedProjects?.map((project, index: number) => (
              <div key={index} className={`${styles.card} ${styles['card' + index]}`}>
                <FuturisticProjectCard
                  {...project}
                  image={
                    index === 0
                      ? payLink
                      : index === 1
                      ? partnersScreen
                      : index === 2
                      ? launchScreen
                      : codercatScreen
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.seeMore}>
          <a href="/projects" className={globalStyles.btn}>
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsGallery;
