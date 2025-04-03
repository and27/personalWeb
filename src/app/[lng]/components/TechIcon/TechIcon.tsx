import React from 'react';
import styles from './TechIcon.module.scss';

interface TechIconProps {
  icon: React.ReactElement;
  label: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, label }) => {
  return (
    <div className={styles['tech-icon']}>
      {icon}
      <span className={styles['tech-icon__tooltip']}>{label}</span>
    </div>
  );
};

export default TechIcon;
