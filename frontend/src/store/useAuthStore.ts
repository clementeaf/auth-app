import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userName: string | null;
  login: (userName: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false, // Inicialmente no autenticado
  userName: null,         // Nombre de usuario es nulo hasta que se loguee
  login: (userName: string) => set({ isAuthenticated: true, userName }),  // Cambia isAuthenticated a true
  logout: () => set({ isAuthenticated: false, userName: null }),          // Restablece el estado de autenticación
}));