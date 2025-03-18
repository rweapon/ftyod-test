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
  Status,
} from "@entities/matches/model/types";
import matchesReducer from "./model/matchesSlice";
import Card from "@entities/matches/ui/Card/Card";
import { useFilterMatches } from "@entities/matches/api/publicApi";
import { MatchFilters, StatusVariants } from "@entities/matches/model/config";

export {
  matchesApi,
  MatchFilters,
  matchesReducer,
  useGetMatchesMutation,
  Card,
  StatusVariants,
  useFilterMatches,
};
export type { GetMatchesResponse, MatchesState, Match, Player, Team, Status };
