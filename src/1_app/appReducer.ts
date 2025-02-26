import { matchesApi, matchesReducer } from "@entities/matches";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  matches: matchesReducer,
  [matchesApi.reducerPath]: matchesApi.reducer,
});
