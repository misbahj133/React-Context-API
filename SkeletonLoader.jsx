// src/components/SkeletonLoader.jsx
import React from 'react';

export function SkeletonCard() {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.line, width: '60%', height: '20px' }}></div>
      <div style={{ ...styles.line, width: '30%', height: '16px', marginTop: '10px' }}></div>
    </div>
  );
}

const styles = {
  card: {
    padding: '1rem',
    borderRadius: '8px',
    background: '#f1f5f9',
    marginBottom: '0.75rem',
    animation: 'pulse 1.5s infinite ease-in-out',
  },
  line: {
    background: '#cbd5e1',
    borderRadius: '4px',
  },
};