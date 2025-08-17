import { create } from "zustand";
import { persist } from "zustand/middleware";
/**
 * Zustand store to manage authentication state (can be used for JWT/token/session-based auth).
 */
export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      setAuth: ({ user }) => set({ user }),
      clearAuth: () => set({ user: null }),
      isAuthenticated: () => !!get().user,
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);
