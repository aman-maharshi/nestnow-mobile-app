import { create } from "zustand"

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: any | null
  login: () => Promise<void>
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,

  login: async () => {
    set({ isLoading: true })

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      set({
        isAuthenticated: true,
        isLoading: false,
        user: { id: "1", name: "Demo User" }
      })
    } catch (error) {
      console.error("Authentication failed:", error)
      set({ isLoading: false })
      throw error
    }
  },

  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
      isLoading: false
    })
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  }
}))
