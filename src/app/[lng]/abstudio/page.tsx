import Script from 'next/script';
import Testimonials from '../components/Testimonials/Testimonials';
import { getDictionary } from '../../../dictionaries';
import Masthead from '../components/abstudio/Masthead/Masthead';
import FeaturedProjectsGallery from '../components/abstudio/FeaturedProjects/FeaturedProjectsGallery';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const metadata = {
  title: { absolute: 'Abstudio | Estudio de desarrollo web y growth' },
  description:
    'Abstudio ayuda a emprendedores y negocios a crecer con sitios web, estrategias digitales y automatización con IA.'
};

import ContactSection from '../modules/ContactSection/ContactSection';

export default async function Home() {
  const lng = 'es';
  const dict = await getDictionary(lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };
  const sCurveInfoStudio = dict?.aboutStudio || {
    title: '',
    description: '',
    cta: ''
  };
  const servicesStudio = dict?.servicesStudio || {
    title: '',
    services: []
  };
  const contact = dict?.contact || {
    blockTitle: '',
    inlineTitle: '',
    description: '',
    cta: ''
  };
  const services = dict?.services || {
    title: '',
    services: []
  };

  const localizedProjects = (dict?.projects || []).filter(project => !project.hidden);
  return (
    <>
      <Masthead {...mastheadInfo} lang={lng} />
      <FeaturedProjects {...services} />
      <FeaturedProjectsGallery projects={localizedProjects} title="Proyectos web recientes" />
      {/* <Scurve {...sCurveInfoStudio} /> */}
      <Testimonials />
      <ContactSection layout={'inline'} {...contact} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        strategy="worker"
      />
      <Script id="google-analytics" strategy="worker">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
