import { County } from '@/types/County';
import { TownOrCommunity } from '@/types/TownOrCommunity';

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
}
