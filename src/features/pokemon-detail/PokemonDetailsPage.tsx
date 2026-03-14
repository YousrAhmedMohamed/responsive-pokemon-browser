import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetail } from '../../hooks/usePokemon';
import styles from './PokemonDetailsPage.module.css';

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data: pokemon } = usePokemonDetail(name!);

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <span>←</span> Back to List
      </button>

      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.pokemonName}>⚡ {pokemon.name}</h1>
          <div className={styles.pokemonId}>#{pokemon.id.toString().padStart(3, '0')}</div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <img 
              src={pokemon.sprites.other['official-artwork'].front_default} 
              alt={pokemon.name} 
              className={styles.pokemonImg}
            />
            <div className={styles.typeBadge}>Fire</div>
            
            <div className={styles.physicalInfo}>
              <div className={styles.infoBox}>
                <div>📏 Height</div>
                <strong>{pokemon.height / 10} m</strong>
              </div>
              <div className={styles.infoBox}>
                <div>⚖️ Weight</div>
                <strong>{pokemon.weight / 10} kg</strong>
              </div>
            </div>
          </div>

          <div className={styles.dataSection}>
            <h2 className={styles.sectionTitle}>Base Stats</h2>
            {pokemon.stats.map((s: any) => (
              <div key={s.stat.name} className={styles.statRow}>
                <span className={styles.statLabel}>{s.stat.name.toUpperCase()}</span>
                <div className={styles.barContainer}>
                  <div 
                    className={styles.barFill} 
                    style={{ width: `${(s.base_stat / 200) * 100}%` }} 
                  />
                </div>
                <span className={styles.statValue}>{s.base_stat}</span>
              </div>
            ))}

            <h2 className={styles.sectionTitle}>Abilities</h2>
            <div className={styles.abilitiesContainer}>
              {pokemon.abilities.map((a: any) => (
                <div key={a.ability.name} className={styles.abilityBadge}>
                  {a.ability.name}
                  {a.is_hidden && <span className={styles.hiddenAbility}>(Hidden)</span>}
                </div>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Base Experience</h2>
            <div className={styles.experienceValue}>{pokemon.base_experience} XP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;