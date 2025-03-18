import { MatchFilters } from "@entities/matches/model/config";

export type ICustomError = {
  data: {
    error: string;
  };
  status: number;
};

export type MatchesState = {
  value: Match[];
  filter: MatchFilters
};

export type Status = Exclude<`${MatchFilters}`, "All">;

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: Status;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export type Player = {
  username: string;
  kills: number;
};

export type GetMatchesResponse = {
  data: {
    matches: Match[];
    ok: boolean;
  };
};

export type WSGetMatchesResponse = {
  type: string;
  data: Match[];
};
