import { createContext, useContext } from 'react';
import type { User } from '../types';

interface UserContextType {
  user: User;
  updateUser: (user: Partial<User>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};