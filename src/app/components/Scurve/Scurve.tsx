'use client';
import styles from './Scurve.module.scss';
import globalStyles from '../../page.module.scss';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface IScurve {
  title: string;
  description: Array<string>;
}

const Scurve: React.FC<IScurve> = ({ title, description }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-500px', '-100px']
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [300, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const opacity = scrollYProgress;

  return (
    <section className={globalStyles.scurve} ref={ref}>
      <div className={globalStyles.container}>
        <div className={styles.scurve__inner}>
          <div className={styles.scurve__content}>
            <h2 className={styles.scurve__title}>About</h2>
            {description.map(description => (
              <p className={globalStyles.section__text}>{description}</p>
            ))}
          </div>
          <motion.div style={{ x, opacity }} className={styles.scurve__media}>
            <Image
              src="/website.png"
              width={300}
              height={300}
              alt="Web application"
              title="Web application"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
