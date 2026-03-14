
import { Suspense, lazy } from 'react';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import styles from './PokemonListPage.module.css';
import layoutStyles from '../../components/layout/Layout.module.css'
import { LoadMoreSkeleton, PaginationSpinner } from '../../components/ui/loader/Loader';
const PaginationView = lazy(() => import('./components/PaginationView/PaginationView'));
const LoadMoreView = lazy(() => import('./components/loadMoreView/LoadMoreView'));

const PokemonListPage = () => {

  
  const [viewMode, setViewMode] = useState<'pagination' | 'loadMore'>('pagination');

  return (
    <Layout>
    <header className={styles.headerSection}>
        <div className={styles.titleContainer}>
          <span className={styles.titleIcon}>⚡</span>
          <h1 className={styles.mainTitle}>Pokédex</h1>
        </div>
        <p className={styles.subtitle}>
          Discover and explore Pokemon with {viewMode === 'loadMore' ? 'infinite scroll' : 'pagination'}
        </p>

        <div className={styles.filterContainer}>
          <button 
            onClick={() => setViewMode('pagination')}
            className={`${styles.button} ${viewMode === 'pagination' ? styles.activeBtn : ''}`}
          >
            Page Controls
          </button>
          <button 
            onClick={() => setViewMode('loadMore')}
            className={`${styles.button} ${viewMode === 'loadMore' ? styles.activeBtn : ''}`}
          >
            Infinite Scroll
          </button>
        </div>
        </header>
      {viewMode === 'pagination' ? (
        <Suspense fallback={<PaginationSpinner />}>
          <PaginationView />
        </Suspense>
      ) : (
    <Suspense fallback={
    <div className={layoutStyles.pokemonGrid}>
      {Array.from({ length: 8 }).map((_, i) => <LoadMoreSkeleton key={i} />)}
    </div>
  }>
    <LoadMoreView />
  </Suspense>
      )}
    </Layout>
  );
};

export default PokemonListPage;