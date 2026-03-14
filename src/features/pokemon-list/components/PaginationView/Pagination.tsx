import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  disablePrev?: boolean;
  disableNext?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageBtn} ${currentPage === i ? styles.activePage : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxVisiblePages) {
      pages.push(<span key="sep" className={styles.divider}>...</span>);
      pages.push(
        <button
          key={totalPages}
          className={`${styles.pageBtn} ${currentPage === totalPages ? styles.activePage : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagesWrapper}>
        <button 
          className={styles.navBtn}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt; Previous
        </button>

        {renderPageNumbers()}

        <button 
          className={styles.navBtn}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>

      <p className={styles.pageInfo}>
        Page {currentPage} of {totalPages} (20 Pokemon shown)
      </p>
    </div>
  );
};

export default Pagination;