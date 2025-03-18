import { useAppSelector } from "@app/appStore";
import { StatusVariants, Status, useFilterMatches } from "@entities/matches";
import { SelectProps } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui";

export default function FilterSelect({ ...props }: SelectProps) {
  const filter = useAppSelector((state) => state.matches.filter);
  const { updateFilters } = useFilterMatches();

  return (
    <Select
      {...props}
      value={filter}
      onValueChange={updateFilters as (value: string) => void}
    >
      <SelectTrigger>
        <SelectValue placeholder="Все статусы" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(StatusVariants).map((variant) => (
          <SelectItem value={variant} key={variant}>
            {StatusVariants[variant as Status]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
