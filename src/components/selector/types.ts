export type Car = {
  name: string;
  range: number;
  price: string;
};

export type SelectorType = {
  car: Car | undefined;
  selectCar: (car: Car) => void;
};
