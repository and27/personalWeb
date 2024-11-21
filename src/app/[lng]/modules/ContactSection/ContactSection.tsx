'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactSection.module.scss';
import globalStyles from '../../page.module.scss';
import { InlineWidget } from 'react-calendly';
import { PopupButton } from 'react-calendly';
import Linkedin from '../../../../../public/linkedin.svg';
import Github from '../../../../../public/github.svg';
import Link from 'next/link';

interface IContactSectionProps {
  layout?: string;
  inlineTitle?: string;
  blockTitle?: string;
  description: string;
  cta: string;
}
const ContactSection: React.FC<IContactSectionProps> = ({
  layout = 'block',
  inlineTitle,
  blockTitle,
  description,
  cta
}: IContactSectionProps) => {
  const ref = useRef(null);

  const [matchMobileQuery, setMatchMobileQuery] = useState(false);
  useEffect(() => {
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatchMobileQuery(event.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    setMatchMobileQuery(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={globalStyles.contact} ref={ref} id="contact">
      <div className={`${globalStyles.container} ${styles.contactSection__inner}`}>
        <div
          className={`${styles.contactSection__content} ${
            layout === 'inline' && styles.contactSection__content__inline
          }`}
        >
          {layout === 'block' && (
            <div>
              <h1>{blockTitle}</h1>
              <p>{description}</p>
            </div>
          )}
          {layout === 'inline' && <h2>{inlineTitle}</h2>}
          <div className={styles.contactSection__contact_data}>
            <div className={styles.contactSection__social}>
              <Link
                href={'https://www.linkedin.com/in/andres-banda'}
                target="_blank"
                title="LinkedIn profile"
              >
                <Linkedin className={styles.svg} />
                <span className={globalStyles.visually_hidden}>Linkedin profile</span>
              </Link>
              <Link href={'https://github.com/and27'} target="_blank" title="Github profile">
                <Github className={styles.svg} />
                <span className={globalStyles.visually_hidden}>Github profile</span>
              </Link>
            </div>
            <a href="mailto:andres.banda.sm@gmail.com">andres.banda.sm@gmail.com</a>
          </div>
        </div>
        {layout === 'block' && (
          <InlineWidget
            url="https://calendly.com/andres-banda/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{
              height: '520px',
              minWidth: matchMobileQuery ? '300px' : '400px',
              overflow: 'hidden'
            }}
          />
        )}
        {layout === 'inline' && (
          <PopupButton
            url="https://calendly.com/andres-banda/30min?"
            className={`${globalStyles.btn} ${styles.btn}`}
            rootElement={document.body}
            text={cta}
          />
        )}
      </div>
    </section>
  );
};

export default ContactSection;
