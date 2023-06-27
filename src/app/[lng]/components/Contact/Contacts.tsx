'use client';
import globalStyles from '../../page.module.scss';
import styles from './contact.module.scss';

function Contact() {
  const handleOnContact = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/andres-banda/15min'
    });
    console.log(window.Calendly);
  };

  return (
    <section className={globalStyles.contact} id="contact">
      <div className={globalStyles.container}>
        <h2 className={globalStyles.section__title}>Let's talk</h2>
        <p className={`${globalStyles.section__text} ${styles.contact__text}`}>
          Some of the most creative projects start with a conversation
        </p>
        <p className={`${globalStyles.section__text} ${styles.contact__text}`}>
          Set up a call to discover how we can create an innovative digital
          experience together
        </p>
        <button className={globalStyles.btn} onClick={handleOnContact}>
          Schedule a 15 min meeting
        </button>
      </div>
    </section>
  );
}

export default Contact;
