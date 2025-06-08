import React from 'react';
import { useTheme } from '../lib/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginRight: '15px',
      gap: '8px'
    }}>
      <span style={{ 
        fontSize: '0.85rem', 
        fontWeight: 600,
        color: theme === 'light' ? '#2563eb' : '#7c7bff'
      }}>
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
