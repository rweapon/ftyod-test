export type MatchesState = {
  value: Match[];
};

export enum MatchFilters {
  SCHEDULED = "Scheduled",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
  ALL = "All",
}

export const StatusVariants = {
  [MatchFilters.SCHEDULED]: "Match preparing",
  [MatchFilters.ONGOING]: "Live",
  [MatchFilters.FINISHED]: "Finished",
  [MatchFilters.ALL]: "Все статусы",
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
