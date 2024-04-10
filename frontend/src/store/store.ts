import { createStore } from 'zustand';

const useStore = createStore((set) => ({
  cities: [],
  setAllCities: async () => {
    try {
      const response = await fetch('http://localhost:7070/');
      const data = await response.json();
      set({ cities: data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));

export default useStore