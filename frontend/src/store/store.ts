import { create } from 'zustand';
import { ICity } from '../types/types';

interface State {
  cities: ICity[] | [],
  inputValue: string,
}
type Action = {
  setInputValue: (value: string) => void;
}

const useStore = create<State & Action>((set) => ({
  cities: [],
  inputValue: '',
  setInputValue: (value: string) => set({ inputValue: value }),  
}));

export default useStore