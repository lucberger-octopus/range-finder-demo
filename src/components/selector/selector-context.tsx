import { createContext, useContext } from "react";
import type { SelectorType } from "./types";

export const SelectorContext = createContext<SelectorType | undefined>(
  undefined
);

export function useSelectorContext() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(
      "useSelectorContext must be used within a SelectorContextContainer"
    );
  }
  return context;
}
