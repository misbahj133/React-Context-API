// src/components/EmptyState.jsx
import React from 'react';

export function EmptyState({ title, message, onAction, actionLabel }) {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>📦</div>
      <h3>{title || 'No Data Found'}</h3>
      <p style={styles.text}>{message || 'There are no items to display at this time.'}</p>
      {onAction && (
        <button style={styles.button} onClick={onAction}>
          {actionLabel || 'Reload'}
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem 1.5rem',
    border: '2px dashed #cbd5e1',
    borderRadius: '12px',
    margin: '1rem 0',
  },
  icon: { fontSize: '3rem', marginBottom: '0.5rem' },
  text: { color: '#64748b', marginBottom: '1rem' },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};