import { batch } from "react-redux";

// Local Imports
import ModApi from "client/api/apiHandlers/modHandler";
import { updateLoadingState } from "client/store/reducers/appReducer";
import { setModsList, setModDetails } from "client/store/reducers/modReducer";
import { initialModState } from "client/store/states/modInitialState";

// Get Mods List
export function getModsListAction(
  pageNumber = 1,
  pageSize = 12,
  sortBy = "mostPopular"
) {
  return async (dispatch) => {
    try {
      dispatch(setModsList({ ...initialModState.modsList, loading: true }));
      let modsList = await ModApi.getModsListApi(pageNumber, pageSize, sortBy);
      dispatch(setModsList({ ...initialModState.modsList, ...modsList }));
    } catch (e) {
      dispatch(setModsList({ ...initialModState.modsList, errors: e }));
    }
  };
}

// Get Specific Mod Details Based on ID
export function getModDetailsAction(modId) {
  return async (dispatch) => {
    try {
      dispatch(setModDetails({ ...initialModState.modDetails, loading: true }));
      let modDetails = await ModApi.getModDetailsApi(modId);
      dispatch(setModDetails({ ...initialModState.modDetails, ...modDetails }));
    } catch (e) {
      dispatch(setModDetails({ ...initialModState.modDetails, errors: e }));
    }
  };
}
