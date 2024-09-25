import { ProjectCards } from '@/data/projectCards';
import RowCards from '../components/Cards/RowCards/RowCards';
import RowModalCards from '../components/Cards/RowModalCards/RowModalCards';
import globalStyles from '../page.module.scss';

const RecentProjects = ({ localizedProjects }: { localizedProjects: any }) => {
  const combinedProjects = ProjectCards.map((project, index) => {
    const localizedProject =
      localizedProjects && localizedProjects[index] ? localizedProjects[index] : {};
    return {
      ...project,
      title: localizedProject.title || project.title,
      description: localizedProject.description || project.description,
      extra: {
        ...project.extra
      }
    };
  });

  return (
    <section
      className={globalStyles.projects}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <RowModalCards cards={combinedProjects} />
    </section>
  );
};

export default RecentProjects;
