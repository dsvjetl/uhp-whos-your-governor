import { County } from '@/types/County';

export interface AllCountiesFilled {
  allCounties: {
    counties: County[];
  };
}

export interface CroatiaPlacesState {
  allCounties: {} | {
    counties: County[];
  };
}
