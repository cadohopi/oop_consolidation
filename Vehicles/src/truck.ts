// truck.ts
import Vehicle from "./vehicle";

class Truck extends Vehicle {
    private towingCapacity: number;

    constructor(make: string, model: string, year: number, towingCapacity: number) {
        super(make, model, year);
        this.towingCapacity = towingCapacity;
    }

    // Override the getInfo method to add specific truck
    public getInfo(): string {
        return `${super.getInfo()}, Towing Capacity: ${this.towingCapacity}`;
    }

    // Overload method to calculate the maintenance with optional factor
    public calculateMaintenanceCost(): number;
    public calculateMaintenanceCost(weightFactor: number): number;

    public calculateMaintenanceCost(weightFactor?: number): number {
        return weightFactor !== undefined ? 200 * weightFactor : 100;
    }
}

export default Truck;