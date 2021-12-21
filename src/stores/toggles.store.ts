import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Toggles = Record<string, boolean>;

export interface State {
  toggles: Toggles,
  toggle: (color: string) => void,
}

const initialState: Toggles = {
  red: true,
  green: true,
  blue: true,
};

export const useTogglesStore = create<State>(devtools((set, get) => ({
  toggles: initialState,
  toggle: (color) => {
    set((state) => {
      state.toggles[color] = !state.toggles[color];
    });
  },
}), { name: 'TogglesStore' }));
