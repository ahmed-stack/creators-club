import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reduxBatch } from "@manaflair/redux-batch";
import { createWrapper } from "next-redux-wrapper";

// Local Imports
import { reducer as appReducer } from "client/store/reducers/appReducer";
import { reducer as modReducer } from "client/store/reducers/modReducer";

const initializeStore = (preloadedState = undefined) => {
  const combinedReducer = combineReducers({
    app: appReducer,
    mod: modReducer
  });

  return configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
    enhancers: [reduxBatch],
    preloadedState,
  });
};

export const wrapper = createWrapper(initializeStore);
