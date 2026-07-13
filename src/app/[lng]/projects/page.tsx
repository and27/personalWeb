import { getDictionary } from '@/dictionaries';
import ProjectStack from '../components/ProjectStack/ProjectStack';
import globalStyles from '../page.module.scss';
import styles from './projects.module.scss';

export async function generateMetadata({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng } = await params;
  const isEn = lng === 'en';
  return {
    title: isEn ? 'Projects' : 'Proyectos',
    description: isEn
      ? 'Web and mobile products I have designed and built: EdTech, SaaS, Web3 and AI.'
      : 'Productos web y móviles que he diseñado y construido: EdTech, SaaS, Web3 e IA.'
  };
}

const ProjectsPage = async ({ params }: { params: Promise<{ lng?: string }> }) => {
  const { lng = 'es' } = await params;
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
