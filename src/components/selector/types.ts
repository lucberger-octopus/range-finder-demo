export type Car = {
  name: string;
  range: string;
  price: string;
};

export type SelectorType = {
  car: Car | undefined;
  selectCar: (car: Car) => void;
};
