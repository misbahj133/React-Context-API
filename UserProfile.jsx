import React from 'react';
import { useApp } from './AppContext';

export function UserProfile() {
  const { state } = useApp();

  if (state.isLoading) {
    return <div style={{ color: '#94a3b8' }}>Loading User...</div>;
  }

  if (!state.user) return null;

  return (
    <div style={styles.badge}>
      <span>👤 <strong>{state.user.name}</strong> ({state.user.role})</span>
    </div>
  );
}

const styles = {
  badge: {
    padding: '0.5rem 1rem',
    background: '#e0f2fe',
    borderRadius: '20px',
    color: '#0369a1',
  },
};