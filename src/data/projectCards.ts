import Tracker from '../../public/recentProjects/tracker.png';
import Launch from '../../public/launch.png';
import partersLogo from '../../public/recentProjects/partnersLogo.png';
import TrackerScreen from '../../public/recentProjects/capturaTracker.png';
import PartnersScreen from '../../public/recentProjects/capturaPartners.png';
import LaunchScreen from '../../public/recentProjects/capturaLaunch.png';
import { IRowCard } from '../app/[lng]/components/Cards/VerticalCard/Card';

export const ProjectCards: IRowCard[] = [
  {
    id: '1',
    title: 'Partners',
    description:
      'Partners es una app que conecta emprendedores en etapas tempranas con socios estratégicos que complementen sus habilidades.', // Default description
    image: {
      src: partersLogo,
      alt: 'Logo de Partners',
      title: ''
    },
    technologies: ['javascript', 'next'],
    extra: {
      link: 'https://partners-red.vercel.app/',
      screen: {
        src: PartnersScreen,
        alt: 'Screenshot de Partners',
        title: ''
      }
    }
  },
  {
    id: '2',
    title: 'Launch',
    description:
      'Launch is an AI-powered platform designed to streamline the process of testing and launching your business ideas.', // Default description
    image: {
      src: Launch,
      alt: 'Logo de Launch',
      title: ''
    },
    technologies: ['javascript', 'vite'],
    extra: {
      link: 'https://launch-black.vercel.app/',
      screen: {
        src: LaunchScreen,
        alt: 'Screenshot de Launch',
        title: ''
      }
    }
  },
  {
    id: '3',
    title: 'Tracker',
    description:
      'Codercat is a web and mobile app that provides daily tips on accesibility, security and user experience.', // Default description
    image: {
      src: Tracker,
      alt: 'Logo de Tracker',
      title: ''
    },
    technologies: ['javascript', 'vite'],
    extra: {
      link: 'https://tracker-ulqw.vercel.app',
      screen: {
        src: TrackerScreen,
        alt: 'Screenshot de Tracker',
        title: ''
      }
    }
  }
];
