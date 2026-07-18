import styles from './Scurve.module.scss';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';

interface IScurve {
  title: string;
  description: Array<string> | string;
  cta: string;
}

const Scurve: React.FC<IScurve> = ({ title, description }) => {
  return (
    <section className={globalStyles.scurve}>
      <div className={globalStyles.container}>
        <div className={styles.scurve__inner}>
          <Reveal className={styles.scurve__content}>
            <h2 className={`${globalStyles.section__title}`}>{title}</h2>

            {typeof description === 'string' ? (
              <p
                className={globalStyles.section__text}
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            ) : (
              description.map((description, idx) => (
                <p
                  className={globalStyles.section__text}
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              ))
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
