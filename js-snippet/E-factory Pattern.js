//-- factory pattern 

function createVehicle(type, options) {
    switch (type) {
        case 'car':
            return new Car(options);
        case 'truck':
            return new Truck(options);
        default:
            throw new Error('Invalid vehicle type');
    }
}

// Usage
const myCar = createVehicle('car', { color: 'red' });
   const myTruck = createVehicle('truck', { bedLength: 8 });
myCar;