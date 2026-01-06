import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import globalStyles from '../../page.module.scss';
import styles from './ProjectStack.module.scss';
import { ProjectEntry } from '@/types/projects';

const ProjectStack = ({ projects }: { projects: ProjectEntry[] }) => {
  return (
    <div className={globalStyles.container}>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectStack;
