import { StatusVariants, Status } from "@entities/matches";
import { SelectProps } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui";

export default function FilterSelect({ ...props }: SelectProps) {
  return (
    <Select {...props}>
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
