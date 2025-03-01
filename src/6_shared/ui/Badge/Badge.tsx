import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/lib/utils";

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
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "Scheduled"
        ? "Match preparing"
        : variant === "Ongoing"
          ? "Live"
          : "Finished"}
    </div>
  );
}

export { Badge, badgeVariants };
