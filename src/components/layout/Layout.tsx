import { type ReactNode } from "react";
import styles from './Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
   <div className={styles.appContainer}>
      <header style={{ textAlign: 'center' }}>
        <h1>Pokédex</h1>
      </header>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;