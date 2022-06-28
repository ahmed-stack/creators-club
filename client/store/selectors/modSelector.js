//  LIST SELECTORS
export const getModList = (state) => state.mod.modsList.data;
export const getModListPageNumber = (state) => state.mod.modsList.meta.page.current;
export const getModsCount = (state) => state.mod.modsList.meta.page.current;
export const getModListLoading = (state) => state.mod.modsList.loading;
export const getModListError = (state) => state.mod.modsList.errors;


// DETAIL SELECTORS
export const getModDetails = (state) => state.mod.modDetails.data;
export const getModDetailsLoading = (state) => state.mod.modDetails.loading;
export const getModDetailsError = (state) => state.mod.modDetails.errors;