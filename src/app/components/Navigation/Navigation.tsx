import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.css';

interface navLink {
  to: string;
  label: string;
}

type ILinks = Array<navLink>;

const links: ILinks = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/blog',
    label: 'Blog'
  },
  {
    to: '#contact',
    label: 'Contact'
  }
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Image
          src="/firma.png"
          alt="Home link personal logo"
          quality={100}
          width={200}
          height={48}
          sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
        />
        <ul className={styles.navigation__menu}>
          {links.map(({ to, label }) => (
            <li id={label} className={styles.menu__item}>
              <Link href={to} className={styles.menu__link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
