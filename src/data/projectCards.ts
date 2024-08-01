import Codercat from '../../public/codercat.png';
import Launch from '../../public/launch.png';
import Securelab from '../../public/securelab.png';
import { IRowCards } from '../app/[lng]/components/Cards/RowCards/RowCards';
import { IRowCard } from '../app/[lng]/components/Cards/VerticalCard/Card';

export const ProjectCards: IRowCard[] = [
  // {
  //   id: '1',
  //   title: 'Ciodesia',
  //   description:
  //     'Ciodesia is an education platform to provide training and services related to geography.',
  //   link: 'https://ciodesia.com',
  //   image: {
  //     src: Ciodesia,
  //     alt: '',
  //     title: ''
  //   }
  // },
  {
    id: '1',
    title: 'Launch',
    description:
      'Launch is an AI-powered platform designed to streamline the process of testing and launching your business ideas.',
    link: 'https://launch-black.vercel.app/',
    image: {
      src: Launch,
      alt: '',
      title: ''
    },
    cardIcons: ['react', 'js', 'vite']
  },
  {
    id: '2',
    title: 'Codercat',
    description:
      'Codercat is a web and mobile app that provides daily tips on accesibility, security and user experience.',
    link: 'https://codercat.vercel.app',
    image: {
      src: Codercat,
      alt: '',
      title: ''
    },
    cardIcons: ['react', 'js', 'vite']
  },
  {
    id: '3',
    title: 'Secure Lab',
    description:
      'Secure Lab is a mobile app designed to teach cibersecurity  with short tutorials.',
    link: '/securelab',
    image: {
      src: Securelab,
      alt: '',
      title: ''
    },
    cardIcons: ['react', 'js', 'vite']
  }
];

export const Projects: IRowCards = {
  title: 'Recent Projects',
  cards: ProjectCards,
  orientation: 'vertical'
};
