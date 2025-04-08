import styles from './FuturisticProjectCard.module.scss';

interface FuturisticProjectCardProps {
  title: string;
  image: {
    src: string;
  };
  onClick?: () => void;
}

const FuturisticProjectCard = ({ title, image, onClick }: FuturisticProjectCardProps) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image.src})` }} onClick={onClick}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FuturisticProjectCard;
