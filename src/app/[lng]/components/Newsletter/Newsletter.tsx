import styles from './Newsletter.module.scss';
import globalStyles from '../../page.module.scss';

// Set NEXT_PUBLIC_SUBSTACK_URL (e.g. https://andresbanda.substack.com) to enable the section.
const SUBSTACK_URL = process.env.NEXT_PUBLIC_SUBSTACK_URL;

const copy: Record<string, { title: string; description: string }> = {
  es: {
    title: 'Recibe lo próximo que escriba',
    description:
      'Artículos sobre desarrollo de producto, frontend e inteligencia artificial, directo a tu correo. Sin spam.'
  },
  en: {
    title: 'Get my next article in your inbox',
    description:
      'Writing on product development, frontend and artificial intelligence, straight to your inbox. No spam.'
  }
};

interface INewsletterProps {
  lng?: string;
}

const Newsletter: React.FC<INewsletterProps> = ({ lng = 'es' }) => {
  if (!SUBSTACK_URL) return null;
  const { title, description } = copy[lng] || copy.es;

  return (
    <section className={styles.newsletter}>
      <div className={globalStyles.container}>
        <div className={styles.newsletter__inner}>
          <div className={styles.newsletter__content}>
            <h2 className={styles.newsletter__title}>{title}</h2>
            <p className={globalStyles.section__text}>{description}</p>
          </div>
          <iframe
            src={`${SUBSTACK_URL}/embed`}
            className={styles.newsletter__embed}
            title="Newsletter"
            width="480"
            height="150"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
