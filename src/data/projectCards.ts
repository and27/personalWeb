import Tracker from '../../public/recentProjects/tracker.png';
import Launch from '../../public/launch.png';
import partersLogo from '../../public/recentProjects/partnersLogo.png';
import { IRowCard } from '../app/[lng]/components/Cards/VerticalCard/Card';

export const ProjectCardsData: IRowCard[] = [
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
      link: 'https://partners-red.vercel.app/'
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
      link: 'https://launch-black.vercel.app/'
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
      link: 'https://tracker-ulqw.vercel.app'
    }
  }
];
