import Script from 'next/script';
import Scurve from './components/Scurve/Scurve';
import BuildProcess from './components/BuildProcess/BuildProcess';
import BlogCards from './modules/BlogCards';
import { getDictionary } from '../../dictionaries';
import RecentProjects from './modules/RecentProjects';
import ContactSection from './modules/ContactSection/ContactSection';
import PersonalMasthead from './components/PersonalMasthead/Masthead';
import Newsletter from './components/Newsletter/Newsletter';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default async function Home({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng = 'es' } = await params;

  const dict = await getDictionary(lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };
  const sCurveInfo = dict?.about || {
    title: '',
    description: '',
    cta: ''
  };
  const contact = dict?.contact || {
    blockTitle: '',
    inlineTitle: '',
    description: '',
    cta: ''
  };

  const localizedProjects = dict?.recentProjects || [];
  return (
    <>
      <PersonalMasthead {...mastheadInfo} lang={lng} />
      <BuildProcess lang={lng} />
      <Scurve {...sCurveInfo} />
      <RecentProjects localizedProjects={localizedProjects} />
      <BlogCards maxCards={3} sectionTitle="Blog" locale={lng} />
      <Newsletter lng={lng} />
      <ContactSection layout={'inline'} {...contact} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
