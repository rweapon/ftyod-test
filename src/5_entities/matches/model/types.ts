export type MatchesState = {
  value: Match[];
};

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: "Scheduled" | "Ongoing" | "Finished";
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
