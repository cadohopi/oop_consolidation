// mororcycle.ts
import Vehicle from "./vehicle";

class Mortocycle extends Vehicle {
    private hasSidecar: boolean;

    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }

    // Override the getInfo method to add specific Mororcycle details
    public getInfo(): string {
        const sidecarInfor = this.hasSidecar ? "with sidecar" : "without sidecar";
        return `${super.getInfo()}, Motorcycle ${sidecarInfor}`;
    }

    public calculateMaintenanceCost(): number {
        return 75;
    }
}

export default Mortocycle;
