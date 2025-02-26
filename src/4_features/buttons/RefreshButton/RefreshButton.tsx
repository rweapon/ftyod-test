import { Button } from "@shared/ui";
import { RefreshCcw } from "lucide-react";
type Props = {};
export default function RefreshButton({}: Props) {
  return (
    <Button>
      Обновить
      <RefreshCcw />
    </Button>
  );
}
