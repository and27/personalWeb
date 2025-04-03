import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiSolidity,
  SiSupabase,
  SiVercel,
  SiFirebase,
  SiTailwindcss
} from 'react-icons/si';
import { TbPlugConnected } from 'react-icons/tb';
import { FaInfinity } from 'react-icons/fa';

const techIcons: Record<string, { icon: React.ReactElement; label: string }> = {
  javascript: { icon: <SiJavascript />, label: 'JavaScript' },
  react: { icon: <SiReact />, label: 'React' },
  'next.js': { icon: <SiNextdotjs />, label: 'Next.js' },
  solidity: { icon: <SiSolidity />, label: 'Solidity' },
  supabase: { icon: <SiSupabase />, label: 'Supabase' },
  firebase: { icon: <SiFirebase />, label: 'Firebase' },
  tailwindcss: { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  vercel: { icon: <SiVercel />, label: 'Vercel' },
  wagmi: { icon: <TbPlugConnected />, label: 'Wagmi' },
  viem: { icon: <FaInfinity />, label: 'Viem' }
};

export default techIcons;
