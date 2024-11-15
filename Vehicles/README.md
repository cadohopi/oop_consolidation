# OOP Vehicle Project

## Project Structure

src/  
- *├── vehicle.ts* # Abtract vehicle class 
- *├── car.ts* # Car class (extends Vehicle)
- *├── truck.ts* # Truck class (extends Vehicle)  
- *├── motorcycle.ts* # Motorcycle class (extends Vehicle)

└── main.ts # Entry point (runs the application)

## Installation
To run the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cadohopi/oop_vehicle.git

2. **Navigate into the project folder**:
   ```bash
   cd {your-directory}/oop_vehicle

3. **Install dependencies: Make sure you have Node.js installed, then install the required packages**:
   ```bash
   npm install
4. **Install ts-node and typescript**:
   ```bash
   npm install ts-node typescript --save-dev
5. **Create tsconfig.json file**:
   ```bash
   tsc --init
6. **Modify the package.json**:  
   In your package.json, under the "scripts" section, you can add:  
    "scripts": {
        "start": "ts-node src/main.ts"
    }
7. **Run the Project with ts-node**:
   ```bash
   npm start

## Contributing
Feel free to fork the repository, submit pull requests, or open issues. Contributions are always welcome!