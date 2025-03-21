import { StatusVariants } from "@entities/matches";
import { cn } from "@shared/model/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded min-w-24 text-nowrap px-2.5 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        Scheduled: "bg-scheduled",
        Ongoing: "bg-progress",
        Finished: "bg-primary",
      },
    },
    defaultVariants: {
      variant: "Scheduled",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<VariantProps<typeof badgeVariants>> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {StatusVariants[variant ?? "Scheduled"]}
    </div>
  );
}

export { Badge, badgeVariants };

