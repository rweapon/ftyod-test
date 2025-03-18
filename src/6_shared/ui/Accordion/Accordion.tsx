import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@shared/model/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-card rounded px-4", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      {...props}
      className={cn(
        "flex flex-grow items-center flex-col md:flex-row gap-2 transition-all text-left [&[data-state=open]>svg]:rotate-180 pb-2 md:pb-0",
        className
      )}
    >
      <div className="relative w-full flex flex-grow items-center justify-between gap-4 pt-5 py-3 md:py-5 text-base font-semibold empty:hidden *:flex *:items-center *:gap-3 *:text-sm *:sm:text-base ">
        {children}
      </div>
      <ChevronDown className="size-7 shrink-0 text-card-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("flex gap-8 pb-2 md:pb-4 pt-0 *:flex-1", className)}>
      {children}
    </div>
    <AccordionTrigger className="md:hidden" />
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

