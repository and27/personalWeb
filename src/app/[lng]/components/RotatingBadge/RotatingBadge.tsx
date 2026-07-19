import styles from './RotatingBadge.module.scss';

interface RotatingBadgeProps {
  text: string;
  className?: string;
}

// Decorative circular seal: the text loops around a ring that spins slowly
// via CSS transform (cheap, GPU-friendly), with a static glyph at the
// center. Purely decorative — hidden from assistive tech, paused under
// prefers-reduced-motion.
const RotatingBadge: React.FC<RotatingBadgeProps> = ({ text, className }) => {
  const repeated = `${text} · ${text} · `;

  return (
    <div className={`${styles.badge} ${className || ''}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className={styles.ring}>
        <path
          id="badgeRingPath"
          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
        <text className={styles.ringText}>
          <textPath href="#badgeRingPath">{repeated}</textPath>
        </text>
      </svg>
      <span className={styles.glyph}>*</span>
    </div>
  );
};

export default RotatingBadge;
