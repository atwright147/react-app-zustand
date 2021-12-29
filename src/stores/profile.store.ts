import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { Profile } from '../types/profile.type';

export interface State {
  profile: Profile,
  add: (profile: Profile) => void,
}

export const initialState: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  contactMethod: {
    email: false,
    post: false,
    sms: false,
  },
  description: '',
};

export const useProfileStore = create<State>(devtools((set, get) => ({
  profile: initialState,
  add: (profile) => {
    set(() => ({
      profile,
    }));
  },
}), { name: 'ProfileStore' }));
