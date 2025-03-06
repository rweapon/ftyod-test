import {
  matchesApi,
  useGetMatchesMutation,
  
} from "@entities/matches/api/matchesApi";
import {
  MatchesState,
  GetMatchesResponse,
  Match,
  Player,
  Team,
  StatusVariants,
  MatchFilters,
  Status,
} from "@entities/matches/model/types";
import matchesReducer, { filterMatches } from "./model/matchesSlice";
import Card from "@entities/matches/ui/Card/Card";

export {
  matchesApi,
  MatchFilters,
  matchesReducer,
  useGetMatchesMutation,
  Card,
  StatusVariants,
  filterMatches
};
export type {
  GetMatchesResponse,
  MatchesState,
  Match,
  Player,
  Team,
  Status,
};
