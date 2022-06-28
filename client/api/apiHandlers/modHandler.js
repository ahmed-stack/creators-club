// Local Imports
import getRoute from "client/api/apiRoutes";
import { API } from "client/api/http";

class ModApi extends API {
  getModsListApi = (pageNumber, pageSize, sortBy) => {
    const route = getRoute("getModsList", {pageNumber, pageSize, sortBy});
    return this.fetch(route);
  };

  getModDetailsApi = (modId) => {
    const route = getRoute("getModDetails", { modId });
    return this.fetch(route);
  };
}

export default new ModApi();
