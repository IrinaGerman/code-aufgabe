import { createStore } from 'zustand';
// import { ICity } from '../types/types';

const useStore = createStore((set) => ({
  cities: [],
  // getCities: () => set((state: { cities: ICity[] }) => ({ cities: state.cities })),  
  getCities: async () => {
    try {
      const response = await fetch('https://xxx');
      const data = await response.json();
      set({ cities: data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}));

export default useStore