import { County } from '@/types/County';

export interface CroatiaPlacesState {
  allCounties: {
    counties: County[];
  } | {};
}
