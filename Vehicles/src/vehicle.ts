// vehicle.ts
class Vehicle {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Get basic info about the vehicle
    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`
    }

    // Calculate the cost of maintenance
    public calculateMaintenanceCost(): number {
        return 0;
    }
}

export default Vehicle;