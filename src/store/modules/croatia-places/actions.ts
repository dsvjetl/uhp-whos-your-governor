import { axiosCroatiaApi } from '@/api/axiosCroatiaApi';
import { apiRoutes } from '@/api/apiRoutes';
import { AjaxService } from '@/utils/services/AjaxService';

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
};
