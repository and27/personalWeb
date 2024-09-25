import { getDictionary } from '../dictionaries';
import ContactSection from '../modules/ContactSection/ContactSection';

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
