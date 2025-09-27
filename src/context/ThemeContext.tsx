import { createContext, useContext } from 'react';
import type { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  updateTheme: (theme: Partial<Theme>) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};