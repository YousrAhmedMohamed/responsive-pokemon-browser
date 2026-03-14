
import PokemonCard from '../../../../components/pokemonCard/PokemonCard';
import layoutStyles from '../../../../components/layout/Layout.module.css'
import { usePokemonInfinite } from '../../../../hooks/usePokemon';
import styles from './LoadMoreView.module.css';
import { PaginationSpinner } from '../../../../components/ui/loader/Loader';
import { useTransition } from 'react';

const LoadMoreView = () => {

  const [isPending, startTransition] = useTransition();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error
  } = usePokemonInfinite(20);


  const handleLoadMore = () => {
    startTransition(() => {
      fetchNextPage();
    });
  };

  if (isError) {
    return (
      <div className={styles.container}>
        <p>Error: {(error as Error).message}</p>
      </div>
    );
  }

  const isLoadingMore = isFetchingNextPage || isPending;

  return (
    <div className={styles.container}>
      <div className={layoutStyles.pokemonGrid}>
        {data?.pages.flatMap((page) => page.results).map((pokemon: any) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other['official-artwork'].front_default}
          />
        ))}
      </div>

      <div className={styles.loadMoreWrapper}>
        {isLoadingMore ? (
          <div className={styles.loaderContainer}>
            <PaginationSpinner />
            <p className={styles.loadingText}>Loading more Pokemon...</p>
            <p className={styles.showingText}>
              Showing {data?.pages.flatMap(p => p.results).length} Pokemon
            </p>
          </div>
        ) : (
          <>
            {hasNextPage ? (
              <button
                onClick={handleLoadMore}
                className={styles.loadMoreBtn}
              >
                Load More Pokemon
              </button>
            ) : (
              <p className={styles.noMoreText}>All Pokemon have been loaded.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoadMoreView;