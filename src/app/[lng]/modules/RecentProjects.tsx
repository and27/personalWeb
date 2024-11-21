import { ProjectCards } from '@/data/projectCards';
import RowModalCards from '../components/Cards/RowModalCards/RowModalCards';
import globalStyles from '../page.module.scss';

const RecentProjects = ({ localizedProjects }: { localizedProjects: any }) => {
  const combinedProjects = ProjectCards.map((project, index) => {
    const localizedProject =
      localizedProjects.projects && localizedProjects.projects[index]
        ? localizedProjects.projects[index]
        : {};
    return {
      ...project,
      title: localizedProject.title || project.title,
      description: localizedProject.description || project.description,
      extra: {
        impact: localizedProject.impact,
        ...project.extra
      }
    };
  });

  return (
    <section className={globalStyles.projects} style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className={globalStyles.section__title}>{localizedProjects.title}</h2>
      <RowModalCards cards={combinedProjects} />
    </section>
  );
};

export default RecentProjects;
