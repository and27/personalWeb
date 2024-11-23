'use client';
import styles from './Scurve.module.scss';
import globalStyles from '../../page.module.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LayoutSVG from './LayoutSVG';
import Image from 'next/image';
import studioImage from '../../../../../public/studioImage.png';

interface IScurve {
  title: string;
  description: Array<string> | string;
  cta: string;
}

const Scurve: React.FC<IScurve> = ({ title, description, cta }) => {
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
            {/* <button className={globalStyles.btn}>{cta}</button> */}
          </div>

          <motion.div style={{ x }} className={styles.scurve__media}>
            <Image src={studioImage} width={500} height={500} alt="workspace image of abstudio" />
            {/* <LayoutSVG /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
