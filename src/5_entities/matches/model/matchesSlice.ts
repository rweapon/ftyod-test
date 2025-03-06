import {
  Match,
  MatchesState,
  MatchFilters,
} from "@entities/matches/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MatchesState = {
  value: [],
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.value = action.payload;
    },
    filterMatches: (state, action: PayloadAction<MatchFilters>) => {
      if (action.payload !== MatchFilters.ALL)
        state.value = state.value.filter(
          ({ status }) => status === action.payload
        );
    },
  },
});

export const { setMatches, filterMatches } = matchesSlice.actions;
export default matchesSlice.reducer;
