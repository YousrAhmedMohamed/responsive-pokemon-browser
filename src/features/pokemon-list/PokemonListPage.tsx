// src/features/pokemon-list/PokemonListPage.tsx
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import styles from './PokemonListPage.module.css';

const PokemonListPage = () => {
  const [viewMode, setViewMode] = useState<'pagination' | 'loadMore'>('pagination');

  return (
    <Layout>
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
          Infinite Scroll (Load More)
        </button>
      </div>

      {/* {viewMode === 'pagination' ? <PaginationView /> : <LoadMoreView />} */}
    </Layout>
  );
};

export default PokemonListPage;