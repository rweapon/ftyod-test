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
} from "@entities/matches/model/types";
import matchesReducer from "./model/matchesSlice";
import Card from "@entities/matches/ui/Card/Card";

export { matchesApi, matchesReducer, useGetMatchesMutation, Card };
export type { GetMatchesResponse, MatchesState, Match, Player, Team };
