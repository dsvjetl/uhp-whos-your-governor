import { CroatiaPlacesState } from '@/types/CroatiaPlacesState';
import { County } from '@/types/County';

export const mutations = {
  setAllCounties(state: CroatiaPlacesState, counties: County[]) {
    state.allCounties = counties;
  },
};
