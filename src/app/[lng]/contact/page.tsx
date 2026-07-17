import { getDictionary } from '../../../dictionaries';
import ContactSection from '../modules/ContactSection/ContactSection';

export async function generateMetadata({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng } = await params;
  const isEn = lng === 'en';
  return {
    title: isEn ? 'Contact' : 'Contacto',
    description: isEn
      ? 'Let’s collaborate on your next digital product. Get in touch.'
      : 'Colaboremos en tu próximo producto digital. Escríbeme.'
  };
}

const Contact = async ({ params }: { params: Promise<{ lng?: string }> }) => {
  const { lng = 'es' } = await params;
  const dict = await getDictionary(lng);
  const contactProps = dict?.contact || {
    blockTitle: '',
    inlineTitle: '',
    description: '',
    cta: ''
  };

  {
    return <ContactSection {...contactProps} />;
  }
};

export default Contact;
