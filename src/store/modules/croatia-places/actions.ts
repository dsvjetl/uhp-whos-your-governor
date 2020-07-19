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
    return allCounties;
  },
};
