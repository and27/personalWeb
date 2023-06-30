'use client';
import React from 'react';
import styles from './ContactSection.module.scss';
import globalStyles from '../../page.module.scss';
import { InlineWidget } from 'react-calendly';
import Image from 'next/image';
import Linkedin from '../../../../../public/linkedin.svg';
import Github from '../../../../../public/github.svg';
import Twitter from '../../../../../public/twitter.svg';

interface IContactSectionProps {
  layout: string;
}
const ContactSection: React.FC<IContactSectionProps> = ({
  layout = 'block'
}) => {
  return (
    <section className={globalStyles.contact}>
      <div
        className={`${globalStyles.container} ${styles.contactSection__inner}`}
      >
        <div
          className={`${styles.contactSection__content} ${
            layout === 'inline' && styles.contactSection__content__inline
          }`}
        >
          {layout === 'block' && <h1>Get in touch</h1>}
          {layout === 'inline' && <h2>Let's create something extraordinary</h2>}
          <div className={styles.contactSection__contact_data}>
            <div className={styles.contactSection__social}>
              <Image width={20} height={20} alt="" src={Linkedin} />

              <Image width={20} height={20} alt="" src={Twitter} />

              <Image width={20} height={20} alt="" src={Github} />
            </div>
            <p>andres.banda.sm@gmail.com</p>
          </div>
        </div>
        {layout === 'block' && (
          <InlineWidget
            url="https://calendly.com/andres-banda/15min?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{ height: '520px', minWidth: '400px', overflow: 'hidden' }}
          />
        )}
        {layout === 'inline' && (
          <button className={`${globalStyles.btn} ${styles.btn}`}>
            Schedule a 15 min meeting
          </button>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
