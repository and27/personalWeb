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
            <h1>Secure Lab App</h1>
            <p>
              Explore our app that stood out among competitors and reached the
              finals in the TUapp Mexico 2019 contest{' '}
            </p>
            <p>The app was designed to...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Securelab;
