const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const MOD_ROUTES = {
    getModsList: `${BASE_URL}/mods?page=<pageNumber>&pageSize=<pageSize>&sortBy=<sortBy>`,
    getModDetails: `${BASE_URL}/mods/<modId>`,
  };
  
  export default MOD_ROUTES;
