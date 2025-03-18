import { useAppDispatch } from "@app/appStore";
import { MatchFilters } from "@entities/matches/model/config";
import { setFilter } from "@entities/matches/model/matchesSlice";

export const useFilterMatches = () => {
  const dispatch = useAppDispatch();

  const updateFilters = (filter: MatchFilters) => {
    dispatch(setFilter(filter));
  };

  return { updateFilters };
};
