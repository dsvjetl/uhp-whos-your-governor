import { axiosCroatiaApi } from '@/api/axiosCroatiaApi';
import { apiRoutes } from '@/api/apiRoutes';
import { AjaxService } from '@/utils/services/AjaxService';
import { TownOrCommunity } from '@/types/TownOrCommunity';

const axiosCroatiaApiService = new AjaxService(axiosCroatiaApi);

export const actions = {
  async getCounties(context: any): Promise<any> {
    let allCounties;

    try {
      allCounties = await axiosCroatiaApiService.get(apiRoutes.getAllCounties);
    } catch (e) {
      return await Promise.reject(e);
    }

    context.commit('setAllCounties', allCounties.data);
  },
  async getTowns(context: any): Promise<any> {
    let allTowns;

    try {
      allTowns = await axiosCroatiaApiService.get(apiRoutes.getAllTowns);
    } catch (e) {
      return await Promise.reject(e);
    }

    context.commit('setAllTowns', allTowns.data);
  },
  async getCommunities(context: any): Promise<any> {
    let allCommunities;

    try {
      allCommunities = await axiosCroatiaApiService.get(apiRoutes.getAllCommunities);
    } catch (e) {
      return await Promise.reject(e);
    }

    context.commit('setAllCommunities', allCommunities.data);
  },
  async getTownAndCommunityDetails(context: any, townOrCommunity: TownOrCommunity): Promise<any> {
    let townAndCommunityDetails;
    const townOrCommunityId: number = townOrCommunity.ID;
    const townOrCommunityEntityType: number = townOrCommunity.entityType;

    try {
      townAndCommunityDetails = await axiosCroatiaApiService.get(
        apiRoutes.getTownAndCommunityDetails(townOrCommunityEntityType, townOrCommunityId),
      );
    } catch (e) {
      return await Promise.reject(e);
    }

    context.commit('setTownAndCommunityDetails', townAndCommunityDetails.data);
  },
};
