import React from 'react';
import { useApp } from './AppContext';          // <-- Single dot '.'
import { SkeletonCard } from './SkeletonLoader'; // <-- Single dot '.'
import { EmptyState } from './EmptyState';       // <-- Single dot '.'

export function ProductList() {
  const { state, dispatch, refetch } = useApp();
  const { products, isLoading } = state;

  if (isLoading) {
    return (
      <div>
        <h3>Product Inventory</h3>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="Your Inventory is Empty"
        message="Looks like all items have been removed or sold out."
        actionLabel="Fetch Sample Data"
        onAction={refetch}
      />
    );
  }

  return (
    <div>
      <div style={styles.header}>
        <h3>Product Inventory ({products.length})</h3>
        <button 
          style={styles.clearBtn} 
          onClick={() => dispatch({ type: 'CLEAR_PRODUCTS' })}
        >
          Clear All
        </button>
      </div>

      {products.map((item) => (
        <div key={item.id} style={styles.card}>
          <div>
            <strong>{item.name}</strong> - {item.price}
          </div>
          <button
            style={styles.deleteBtn}
            onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '0.5rem',
  },
  deleteBtn: { background: '#ef4444', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' },
  clearBtn: { background: '#64748b', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' },
};