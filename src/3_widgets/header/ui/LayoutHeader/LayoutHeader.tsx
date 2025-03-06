import { useAppDispatch } from "@app/appStore";
import {
  filterMatches,
  MatchFilters,
  useGetMatchesMutation,
} from "@entities/matches";
import { FilterSelect } from "@features/select";
import { CACHE_KEYS } from "@shared/constants";
import { Button } from "@shared/ui";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function LayoutHeader() {
  const [getMatches, { isLoading, isError }] = useGetMatchesMutation({
    fixedCacheKey: CACHE_KEYS.GET_MATCHES,
  });

  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<MatchFilters>(MatchFilters.ALL);

  const onClick = async () => {
    await getMatches()
      .unwrap()
      .then(() => {
        if (filter) {
          dispatch(filterMatches(filter));
        }
      });
  };

  useEffect(() => {
    onClick();
  }, [filter, filterMatches, dispatch]);

  return (
    <header className="container flex flex-col sm:flex-row items-center justify-between pt-10 md:pb-5 gap-3">
      <div className="contents sm:flex items-center gap-6 whitespace-nowrap">
        <h1 className="font-heading text-3xl font-bold">Match Tracker</h1>
        <FilterSelect
          value={filter}
          onValueChange={setFilter as (value: string) => void}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full *:w-full sm:w-[unset]">
        {isError && (
          <Button className="bg-card whitespace-normal md:whitespace-nowrap text-sm sm:text-lg font-medium px-6 hover:[unset] cursor-default">
            <AlertTriangle className="text-primary" /> Ошибка: не удалось
            загрузить информацию
          </Button>
        )}
        <Button disabled={isLoading} onClick={onClick}>
          Обновить
          <RefreshCcw />
        </Button>
      </div>
    </header>
  );
}
