import styles from './Navigation.module.scss';
import { ILinks } from './Navigation';
import Link from 'next/link';

interface IMobileMenuProps {
  isMobileMenuActive: boolean;
  handleMobileToggle: () => void;
  links: ILinks;
  handleMobileMenuSelected: () => void;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  isMobileMenuActive,
  handleMobileToggle,
  handleMobileMenuSelected,
  links
}) => (
  <div
    className={`${styles.navigation__mobile_menu_container} ${isMobileMenuActive && styles.active}`}
  >
    <button
      className={`${styles.navigation__mobile_menu_trigger} 
          ${isMobileMenuActive && styles.active}`}
      onClick={handleMobileToggle}
      aria-controls="navigation__mobile-menu"
      aria-expanded={isMobileMenuActive}
      aria-label="Toggle mobile menu"
      aria-haspopup="true"
    >
      {isMobileMenuActive ? '' : '☰'}
    </button>
    <ul
      id="navigation__mobile-menu"
      hidden={!isMobileMenuActive}
      className={`${styles.navigation__mobile_menu} ${
        isMobileMenuActive && styles.navigation__mobile_menu_active
      }`}
    >
      {links.map(({ to, label }) => (
        <li id={label} className={styles.menu__item} key={label}>
          <Link href={to} className={styles.menu__link} onClick={handleMobileMenuSelected}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MobileMenu;
