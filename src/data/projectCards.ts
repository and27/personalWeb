import Tracker from '../../public/recentProjects/tracker.png';
import Launch from '../../public/launch.png';
import partersLogo from '../../public/recentProjects/partnersLogo.png';
import CodercatScreen from '../../public/recentProjects/capturaCodercat.png';
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
      alt: '',
      title: ''
    },
    technologies: ['javascript', 'next'],
    extra: {
      screen: {
        src: PartnersScreen,
        alt: '',
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
      alt: '',
      title: ''
    },
    technologies: ['javascript', 'vite'],
    extra: {
      link: 'https://launch-black.vercel.app/',
      screen: {
        src: LaunchScreen,
        alt: '',
        title: ''
      }
    }
  },
  {
    id: '3',
    title: 'Codercat',
    description:
      'Codercat is a web and mobile app that provides daily tips on accesibility, security and user experience.', // Default description
    image: {
      src: Tracker,
      alt: '',
      title: ''
    },
    technologies: ['javascript', 'vite'],
    extra: {
      impact:
        'Codercat has helped over 1000 developers to improve their skills and create better software.',
      link: 'https://codercat.vercel.app',
      screen: {
        src: CodercatScreen,
        alt: '',
        title: ''
      }
    }
  }
];
