import styles from './Scurve.module.scss';
import globalStyles from '../../page.module.scss';
import Image from 'next/image';

interface IScurve {
  title: string;
  description: Array<string>;
}

const Scurve: React.FC<IScurve> = ({ title, description }) => {
  return (
    <section className={globalStyles.scurve}>
      <div className={globalStyles.container}>
        <div className={styles.scurve__inner}>
          <div className={styles.scurve__content}>
            <h2 className={styles.scurve__title}>About</h2>
            {description.map(description => (
              <p className={globalStyles.section__text}>{description}</p>
            ))}
          </div>
          <div className={styles.scurve__media}>
            <Image src="/website.png" width={300} height={300} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
