import {
  AllCommunitiesFilled,
  AllCountiesFilled,
  AllTownsFilled,
  CroatiaPlacesState,
} from '@/types/CroatiaPlacesState';
import { sortBy } from 'lodash';

export const getters = {
  allCountiesAlphabeticallyOrdered(state: CroatiaPlacesState) {
    const tempState = state as AllCountiesFilled;
    return Object.keys(state.allCounties).length > 0 ? sortBy(tempState.allCounties.counties, ['name']) : [];
  },
  allTowns(state: CroatiaPlacesState) {
    const tempState = state as AllTownsFilled;
    return tempState.allTowns.towns;
  },
  allCommunities(state: CroatiaPlacesState) {
    const tempState = state as AllCommunitiesFilled;
    return tempState.allCommunities.communities;
  },
  allTownsAndCommunitiesAlphabeticallyOrdered(state: CroatiaPlacesState) {
    const allCommunities = getters.allCommunities(state);
    const allTowns = getters.allTowns(state);
    const townsAndCommunities = [...allCommunities, ...allTowns];
    return sortBy(townsAndCommunities, ['name']);
  },
  townAndCommunityDetails(state: CroatiaPlacesState) {
    return state.townAndCommunityDetails;
  },
};
