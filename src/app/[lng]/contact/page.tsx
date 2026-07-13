import { getDictionary } from '../../../dictionaries';
import ContactSection from '../modules/ContactSection/ContactSection';

export async function generateMetadata({ params }: any) {
  const isEn = params?.lng === 'en';
  return {
    title: isEn ? 'Contact' : 'Contacto',
    description: isEn
      ? 'Let’s collaborate on your next digital product. Get in touch.'
      : 'Colaboremos en tu próximo producto digital. Escríbeme.'
  };
}

const Contact = async ({ params }: any) => {
  const { lng } = params;
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
