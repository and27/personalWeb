import Script from 'next/script';
import Statement from './components/Statement/Statement';
import BuildProcess from './components/BuildProcess/BuildProcess';
import BlogCards from './modules/BlogCards';
import { getDictionary } from '../../dictionaries';
import ProjectReel from './components/ProjectReel/ProjectReel';
import ContactSection from './modules/ContactSection/ContactSection';
import PersonalMasthead from './components/PersonalMasthead/Masthead';
import Newsletter from './components/Newsletter/Newsletter';
import { ProjectCardsData } from '@/data/projectCards';

// Bigger hero screenshots for the home teaser (the data file's own images
// are 199x199 logos — too small to blow up full-bleed).
const HOME_REEL_IMAGES: Record<string, string> = {
  '1': '/projects/images/partnersCaptureA.png', // Partners
  '2': '/projects/images/launchCapture.png', // Launch
  '3': '/projects/images/trackerCaptureA.png' // Tracker
};

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default async function Home({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng = 'es' } = await params;

  const dict = await getDictionary(lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };
  const statementInfo = dict?.statement || {
    eyebrow: '',
    text: ''
  };
  const contact = dict?.contact || {
    blockTitle: '',
    inlineTitle: '',
    description: '',
    cta: ''
  };

  const localizedProjects = dict?.recentProjects || { title: '', projects: [] };
  const reelProjects = ProjectCardsData.map((project, index) => {
    const localizedProject = localizedProjects.projects?.[index] || {};
    return {
      id: project.id,
      title: localizedProject.title || project.title,
      description: localizedProject.description || project.description,
      image: HOME_REEL_IMAGES[project.id],
      link: project.extra?.link
    };
  });

  return (
    <>
      <PersonalMasthead {...mastheadInfo} lang={lng} />
      <BuildProcess lang={lng} />
      <Statement {...statementInfo} />
      <ProjectReel title={localizedProjects.title} projects={reelProjects} lang={lng} />
      <BlogCards maxCards={3} sectionTitle="Blog" locale={lng} />
      <Newsletter lng={lng} />
      <ContactSection layout={'inline'} lang={lng} {...contact} />
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
