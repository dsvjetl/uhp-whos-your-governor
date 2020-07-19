import { AllCountiesFilled, CroatiaPlacesState } from '@/types/CroatiaPlacesState';
import { sortBy } from 'lodash';

export const getters = {
  allCountiesAlphabeticallyOrdered(state: CroatiaPlacesState) {
    const tempState = state as AllCountiesFilled;
    return Object.keys(state.allCounties).length > 0 ? sortBy(tempState.allCounties.counties, ['name']) : [];
  },
};
