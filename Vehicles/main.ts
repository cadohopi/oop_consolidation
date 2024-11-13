// main.ts
import Car from "./src/car";
import Truck from "./src/truck";
import Mortocycle from "./src/motorcycle";

function run() {
    const car1 = new Car("Bentley", "SUV", 2024, 4);
    console.log(car1.getInfo());
    console.log("Maintenance Cost:", car1.calculateMaintenanceCost(1.3));

    const car2 = new Car("Ferrari", "SF90", 2023, 2);
    console.log(car2.getInfo());
    console.log("Maintenance Cost:", car2.calculateMaintenanceCost());

    const truck1 = new Truck("Ford", "F-150", 2019, 4);
    console.log(truck1.getInfo());
    console.log("Maintenance Cost:", truck1.calculateMaintenanceCost(3));

    const mororcycle1 = new Mortocycle("Harley-Davidson", "Sportster", 2021, true);
    console.log(mororcycle1.getInfo());
    console.log("Maintenance Cost:", mororcycle1.calculateMaintenanceCost());
}

run()
