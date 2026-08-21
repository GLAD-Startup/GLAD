import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-all duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[var(--radius-md,8px)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-live)] text-[var(--color-card)] shadow-[0_1px_2px_rgb(15_110_76/0.24)] hover:bg-[#0C5A3E] border border-transparent",
        ghost:
          "bg-[var(--color-card)] text-[var(--color-ink)] border border-[var(--color-rule-hi)] hover:bg-[var(--color-sunk)] hover:border-[var(--color-ink-3)] shadow-none",
        // Legacy / fallback variant aliases
        default:
          "bg-[var(--color-live)] text-[var(--color-card)] shadow-[0_1px_2px_rgb(15_110_76/0.24)] hover:bg-[#0C5A3E] border border-transparent",
        outline:
          "bg-[var(--color-card)] text-[var(--color-ink)] border border-[var(--color-rule-hi)] hover:bg-[var(--color-sunk)] hover:border-[var(--color-ink-3)] shadow-none",
        secondary:
          "bg-[var(--color-sunk)] text-[var(--color-ink)] border border-[var(--color-rule)] hover:bg-[var(--color-card)] shadow-none",
        destructive:
          "bg-[#B4402F] text-white hover:bg-[#923325] border border-transparent shadow-xs",
        link: "text-[var(--color-live)] underline-offset-4 hover:underline p-0 h-auto bg-transparent border-none shadow-none active:translate-y-0",
      },
      size: {
        md: "h-[44px] px-5 text-[14px]",
        sm: "h-[36px] px-4 text-[13px]",
        // Legacy size aliases
        default: "h-[44px] px-5 text-[14px]",
        lg: "h-[48px] px-6 text-[15px]",
        icon: "h-[36px] w-[36px] p-0 shrink-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, arrow = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {arrow && (
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] group-hover:translate-x-[3px]"
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
