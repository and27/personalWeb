import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import globalStyles from '../../page.module.scss';

const ProjectStack = ({ projects }: { projects: any[] }) => {
  return (
    <section className={globalStyles.blogHome}>
      <div className={globalStyles.container}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectStack;
