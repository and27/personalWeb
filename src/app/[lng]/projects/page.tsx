import { getDictionary } from '@/dictionaries';
import ProjectStack from '../components/ProjectStack/ProjectStack';
import globalStyles from '../page.module.scss';
import styles from './projects.module.scss';

const ProjectsPage = async ({ params }: { params: { lng: string } }) => {
  const lng = params?.lng || 'es';
  const dict = await getDictionary(lng);
  const localizedProjects = (dict?.projects || []).filter(project => !project.hidden);
  return (
    <section className={globalStyles.projects}>
      <div className={styles.projectsHeader}>
        <h1 className={globalStyles.section__title}>{lng === 'en' ? 'Projects' : 'Proyectos'}</h1>
      </div>
      <ProjectStack projects={localizedProjects} />
    </section>
  );
};

export default ProjectsPage;
