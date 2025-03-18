import { MatchFilters } from "@entities/matches/model/config";
import { Match, MatchesState } from "@entities/matches/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MatchesState = {
  value: [],
  filter: MatchFilters.ALL,
};

const filterMatches = ({ value, filter }: MatchesState) => {
  if (filter !== MatchFilters.ALL)
    return value.filter(({ status }) => status === filter);
  else return value;
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.value = action.payload;
      state.value = filterMatches(state);
    },
    setFilter: (state, action: PayloadAction<MatchFilters>) => {
      state.filter = action.payload;
      state.value = filterMatches(state);
    },
  },
});

export const { setMatches, setFilter } = matchesSlice.actions;
export default matchesSlice.reducer;
