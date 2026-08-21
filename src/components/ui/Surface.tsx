import * as React from "react";
import { cn } from "@/lib/utils";

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  hover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ as: Component = "div", hover = true, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "surface",
          !hover &&
            "hover:transform-none hover:shadow-[0_1px_2px_rgba(25,28,33,0.04),0_2px_8px_rgba(25,28,33,0.02)] hover:border-[var(--color-rule,#DFD9CB)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Surface.displayName = "Surface";
