'use client';
import styles from './admission.module.scss';
import globalStyles from '../page.module.scss';
import React, { useEffect, useState } from 'react';

const Admission = () => {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownDate = new Date('Jul 11, 2024 21:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hours, minutes, seconds } = timer;

  return (
    <div className={styles.admission}>
      <div className={styles.timer}>
        <div className={styles.timer__inner}>
          <p>{hours}</p>
          <span>Hours</span>
        </div>
        <div className={styles.timer__inner}>
          <p>{minutes}</p>
          <span>Minutes</span>
        </div>
        <div className={styles.timer__inner}>
          <p>{seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
      <h1>High Performance Journey</h1>
      <div className={styles.admission__inner}>
        <p className={styles.admission_title}>
          Admission<span>for one</span>
        </p>
      </div>
      <a
        className={globalStyles.btn}
        href="https://wa.me/593997019475?text=Hola%20Andrés%2C%20quiero%20participar%20en%20el%20programa%20de%20alto%20rendimiento
"
      >
        Join now
      </a>
    </div>
  );
};

export default Admission;
