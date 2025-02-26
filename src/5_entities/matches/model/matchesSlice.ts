import { Match, MatchesState } from "@entities/matches/model/types";
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
  },
});

export const { setMatches } = matchesSlice.actions;
export default matchesSlice.reducer;
