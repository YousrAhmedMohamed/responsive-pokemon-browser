import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
}

const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
 
  const formattedId = `#${String(id).padStart(4, '0')}`;

  return (
    <Link to={`/pokemon/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <span className={styles.id}>{formattedId}</span>
      <h3 className={styles.name}>{name}</h3>
    </Link>
  );
};

export default PokemonCard;