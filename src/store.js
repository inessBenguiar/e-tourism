import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const store = (set) => ({
  user: null,
  setUser(user) {
    console.log('🛑 ~ setUser ~ user:', user);

    set((s) => ({ ...s, user }));
  },
});

const useStore = create(persist(store, { name: 'auth' }));
export default useStore;
