import { useGetMatchesMutation } from "@entities/matches";
import { CACHE_KEYS } from "@shared/constants";
import { Button } from "@shared/ui";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function LayoutHeader() {
  const [getMatches, { isLoading, isError }] = useGetMatchesMutation({
    fixedCacheKey: CACHE_KEYS.GET_MATCHES,
  });

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <header className="container flex flex-col sm:flex-row items-center justify-between pt-10 md:pb-5 gap-3">
      <h1 className="font-heading text-3xl font-bold">Match Tracker</h1>
      <div className="flex flex-col md:flex-row gap-3 w-full *:w-full sm:w-[unset]">
        {isError && (
          <Button className="bg-card whitespace-normal md:whitespace-nowrap text-sm sm:text-lg font-medium px-6 hover:[unset] cursor-default">
            <AlertTriangle className="text-primary" /> Ошибка: не удалось
            загрузить информацию
          </Button>
        )}
        <Button disabled={isLoading} onClick={() => getMatches()}>
          Обновить
          <RefreshCcw />
        </Button>
      </div>
    </header>
  );
}
