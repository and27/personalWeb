import { Projects } from '@/data/projectCards';
import RowCards from '../components/Cards/RowCards/RowCards';
import globalStyles from '../page.module.scss';

const RecentProjects = () => {
  return (
    <section
      className={globalStyles.projects}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <RowCards {...Projects} />
      {/* <button className={globalStyles.btn}>See more</button> */}
    </section>
  );
};

export default RecentProjects;
