import React from 'react';
import { AppProvider } from './AppContext';
import { UserProfile } from './UserProfile';
import { ProductList } from './ProductList';
import './styles.css';

export default function App() {
  return (
    <AppProvider>
      <div style={styles.container}>
        <header style={styles.header}>
          <h2>Dashboard</h2>
          {/* Feature 1: Consumes User state globally */}
          <UserProfile />
        </header>

        <main style={styles.main}>
          {/* Feature 2: Consumes Product list globally with Skeleton & Empty States */}
          <ProductList />
        </main>
      </div>
    </AppProvider>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '1rem',
  },
  main: {
    marginTop: '1rem',
  },
};