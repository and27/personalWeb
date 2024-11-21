import Image from 'next/image';
import styles from './securelab.module.css';
import globalStyles from '../page.module.scss';
import SecurelabImg from '../../../../public/securelab_app.png';

const Securelab = () => {
  return (
    <>
      <div className={globalStyles.container}>
        <div className={styles.containerInner}>
          <div className={styles.imageContainer}>
            <Image src={SecurelabImg} width={282} height={300} alt="" />
          </div>
          <div className={styles.content}>
            <h1>Secure Lab Cibersecurity App</h1>
            <p>
              Secure Lab gives short tutorials on cibersecurity concepts about
              networking, app security and forensics.
            </p>
            <p>The app was finalist in the Mexico 2019 TuApp contest.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Securelab;
