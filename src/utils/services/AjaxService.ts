import { AxiosError, AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';

export class AjaxService {
  private axiosApp: AxiosInstance;

  constructor(axiosApp: AxiosInstance) {
    this.axiosApp = axiosApp;
  }

  public async get(url: string): Promise<AxiosResponse> {
    return await this.axiosApp.get(url)
      .then((response: AxiosResponse): AxiosPromise => Promise.resolve(response))
      .catch((error: AxiosError) => Promise.reject(error));
  }
}
