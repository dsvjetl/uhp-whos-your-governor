export interface ApiRoutes {
  getAllCounties: string;
  getAllTowns: string;
  getAllCommunities: string;
  getTownAndCommunityDetails: (entityType: number, id: number) => string;
}
