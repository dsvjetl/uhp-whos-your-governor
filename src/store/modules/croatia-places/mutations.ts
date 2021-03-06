import { CroatiaPlacesState } from '@/types/CroatiaPlacesState';
import { County } from '@/types/County';
import { TownOrCommunity } from '@/types/TownOrCommunity';
import { TownAndCommunityDetails } from '@/types/TownAndCommunityDetails';

export const mutations = {
  setAllCounties(state: CroatiaPlacesState, counties: County[]) {
    state.allCounties = counties;
  },
  setAllTowns(state: CroatiaPlacesState, towns: TownOrCommunity[]) {
    state.allTowns = towns;
  },
  setAllCommunities(state: CroatiaPlacesState, communities: TownOrCommunity[]) {
    state.allCommunities = communities;
  },
  setTownAndCommunityDetails(state: CroatiaPlacesState, townAndCommunityDetails: TownAndCommunityDetails) {
    state.townAndCommunityDetails = townAndCommunityDetails;
  },
};
