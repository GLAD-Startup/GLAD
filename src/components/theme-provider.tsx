import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const useTheme = () => ({
  theme: "light" as const,
  setTheme: () => {},
});
