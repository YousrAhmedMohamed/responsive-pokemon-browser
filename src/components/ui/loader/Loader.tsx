
import styles from './Loaders.module.css';

export const LoadMoreSkeleton = () => (
  <div className={styles.skeletonCard}>
    <div className={`${styles.shimmerBase} ${styles.imagePlaceholder}`} />
    <div className={`${styles.shimmerBase} ${styles.textLineMain}`} />
    <div className={`${styles.shimmerBase} ${styles.textLineSub}`} />
  </div>
);

export const PaginationSpinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.greenSpinner} />
    <p style={{ color: '#065f46', fontWeight: 500 }}>Loading more Pokemon...</p>
  </div>
);