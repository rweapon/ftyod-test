import { Button } from "@shared/ui";
import { AlertTriangle, RefreshCcw } from "lucide-react";

type Props = {
  handleRefresh: () => void;
  isLoading: boolean;
  isError: boolean;
};

export default function LayoutHeader({
  handleRefresh,
  isLoading,
  isError,
}: Props) {
  return (
    <header className="container flex items-center justify-between pt-10 pb-5">
      <h1 className="font-heading text-3xl font-bold">Match Tracker</h1>
      <div className="space-x-3">
        {isError && (
          <Button className="bg-card font-medium px-6 hover:[unset] cursor-default">
            <AlertTriangle className="text-primary" /> Ошибка: не удалось
            загрузить информацию
          </Button>
        )}
        <Button disabled={isLoading} onClick={handleRefresh}>
          Обновить
          <RefreshCcw />
        </Button>
      </div>
    </header>
  );
}
