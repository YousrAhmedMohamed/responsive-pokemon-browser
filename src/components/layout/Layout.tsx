import { type ReactNode } from "react";
import styles from './Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
   <div className={styles.appContainer}>

      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;