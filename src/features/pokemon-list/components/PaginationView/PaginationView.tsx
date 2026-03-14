
import { useState } from 'react';
import { usePokemonPagination } from '../../../../hooks/usePokemon';
import Pagination from './Pagination';
import styles from '../../../../components/layout/Layout.module.css'; 
import PokemonCard from '../../../../components/pokemonCard/PokemonCard';
const PaginationView = () => {
  const [page, setPage] = useState(1);
  const limit = 20;

  const { data, isLoading, isError, error } = usePokemonPagination(page, limit);

  if (isLoading) return <div>Loading Pokemons...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const totalPages = Math.ceil((data?.count || 0) / limit);

  return (
    <div>
      <div className={styles.pokemonGrid}>
        {data?.results.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other['official-artwork'].front_default}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        disablePrev={page === 1}
        disableNext={!data?.next}
      />
    </div>
  );
};

export default PaginationView;