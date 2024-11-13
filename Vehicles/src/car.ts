// car.ts
import Vehicle from "./vehicle";

class Car extends Vehicle {
    private numDoors: number;

    constructor(make: string, model: string, year: number, numDoors:number) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    // Override the getInfo method to add specific car
    public getInfo(): string {
        return `${super.getInfo()} , ${this.numDoors} doors car`;
    }

    // Overload method to calculate the maintenance with optional factor
    public calculateMaintenanceCost(factor: number = 1): number {
        return 150 * factor;
    }
}

export default Car;