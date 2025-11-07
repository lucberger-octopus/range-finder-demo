import { useState, type ReactNode } from "react";
import type { Car, SelectorType } from "./types";
import { SelectorContext } from "./selector-context";

export function SelectorContextContainer({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedCar, setSelectedCar] = useState<Car | undefined>(undefined);

  const contextValue: SelectorType = {
    car: selectedCar,
  };

  return <SelectorContext value={contextValue}>{children}</SelectorContext>;
}
