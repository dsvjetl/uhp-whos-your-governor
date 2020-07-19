import { CroatiaPlacesState } from '@/types/CroatiaPlacesState';

export const getters = {
  allCounties(state: CroatiaPlacesState) {
    return state.allCounties;
  },
};
