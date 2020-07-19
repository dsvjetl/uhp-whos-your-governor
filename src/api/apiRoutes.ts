import { ApiRoutes } from '@/types/ApiRoutes';

export const apiRoutes: ApiRoutes = {
  getAllCounties: '/list.php?entityType=1',
  getAllTowns: '/list.php?entityType=2',
  getAllCommunities: '/list.php?entityType=3',
  getTownAndCommunityDetails: (entityType: number, id: number) => `/details.php?entityType=2&ID=${entityType}`,
};
