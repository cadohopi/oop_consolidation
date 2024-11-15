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
    public calculateMaintenanceCost(): number;
    public calculateMaintenanceCost(factor: number): number;

    public calculateMaintenanceCost(factor?: number): number {
        return factor !== undefined ? 150 * factor : 100;
    }

}

export default Car;