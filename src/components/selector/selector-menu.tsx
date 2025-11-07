import styles from "./selector-menu.module.css";
import carImage from "../../assets/cars/car.png";
import type { Car } from "./types";

const mockedCars: Car[] = [
  {
    name: "Car A",
    range: 250,
    price: "$30,000",
  },
  {
    name: "Car B",
    range: 300,
    price: "$35,000",
  },
  {
    name: "Car C",
    range: 200,
    price: "$25,000",
  },
];

export default function SelectorMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {mockedCars.map((car) => (
          <CarOption key={car.name} car={car} />
        ))}
      </div>
    </div>
  );
}

function CarOption({ car }: { car: Car }) {
  return (
    <div className={styles.car}>
      <img className={styles.image} src={carImage} />
    </div>
  );
}
