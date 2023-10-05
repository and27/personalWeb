'use client';
import styles from './Scurve.module.scss';
import globalStyles from '../../page.module.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LayoutSVG from './LayoutSVG';

interface IScurve {
  title: string;
  description: Array<string>;
}

const Scurve: React.FC<IScurve> = ({ title, description }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.4 1', '0.1 0.4']
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [700, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className={globalStyles.scurve} ref={ref}>
      <div className={globalStyles.container}>
        <div className={styles.scurve__inner}>
          <div className={styles.scurve__content}>
            <h2 className={`${globalStyles.section__title}`}>{title}</h2>

            {description.map((description, idx) => (
              <p
                className={globalStyles.section__text}
                key={idx}
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            ))}
          </div>
          <motion.div style={{ x }} className={styles.scurve__media}>
            <LayoutSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
