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
    public calculateMaintenanceCost(weightFactor = 2): number {
        return 150 * weightFactor;
    }
}

export default Truck;