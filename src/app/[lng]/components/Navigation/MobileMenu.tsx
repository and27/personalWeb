import styles from './Navigation.module.scss';
import { ILinks } from './Navigation';
import Link from 'next/link';

interface IMobileMenuProps {
  isMobileMenuActive: boolean;
  handleMobileToggle: () => void;
  links: ILinks;
  handleMobileMenuSelected: () => void;
  actions?: React.ReactNode;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  isMobileMenuActive,
  handleMobileToggle,
  handleMobileMenuSelected,
  links,
  actions
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
      <span className={styles.menuIcon} />
    </button>
    <div
      className={styles.navigation__mobile_menu_overlay}
      onClick={handleMobileToggle}
      aria-hidden="true"
    />
    <div className={styles.navigation__mobile_menu_panel}>
      <div className={styles.navigation__mobile_menu_header}>
        <span className={styles.navigation__mobile_menu_title}>Menu</span>
      </div>
      {actions && <div className={styles.navigation__mobile_menu_actions}>{actions}</div>}
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
  </div>
);

export default MobileMenu;
