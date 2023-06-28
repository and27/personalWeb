import React from 'react';
import styles from './ContactSection.module.scss';
import globalStyles from '../../page.module.scss';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div
        className={`${globalStyles.container} ${styles.contactSection__inner}`}
      >
        <div className={styles.contactSection__content}>
          <h1>Get in touch and let's create something cool!</h1>
          <div className={styles.contactSection__contact_data}>
            <p>fb, ig, linkedin icon</p>
            <p>andres.banda.sm@gmail.com</p>
          </div>
        </div>
        <div className={styles.contactSection__container__form}>
          Calendly form
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
