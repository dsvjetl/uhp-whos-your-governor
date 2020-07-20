import { County } from '@/types/County';
import { TownOrCommunity } from '@/types/TownOrCommunity';
import { TownAndCommunityDetails } from '@/types/TownAndCommunityDetails';

export interface AllCountiesFilled {
  allCounties: {
    counties: County[];
  };
}

export interface AllTownsFilled {
  allTowns: {
    towns: TownOrCommunity[];
  };
}

export interface AllCommunitiesFilled {
  allCommunities: {
    communities: TownOrCommunity[];
  };
}

export interface CroatiaPlacesState {
  allCounties: {} | {
    counties: County[];
  };
  allTowns: {} | {
    towns: TownOrCommunity[];
  };
  allCommunities: {} | {
    communities: TownOrCommunity[];
  };
  townAndCommunityDetails: {} | TownAndCommunityDetails;
}
