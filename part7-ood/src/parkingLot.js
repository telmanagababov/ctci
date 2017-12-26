class ParkingLot {
    constructor(capacity, price) {
        this.capacity = capacity;
        this.price = price;
        this.cars = [];
    }
    hasPlace() {
        return this.cars.length < this.capacity;
    }
    put(car, customer) {
        console.log('put car', car.name, '/', customer.name);
        if(this.hasPlace()) {
            car.isParking = true;
            this.cars.push(new ParkingInfo(customer, car, this.price))
        }
    }
    take(car, customer) {
        console.log('take car', car.name, '/', customer.name);
        let info = this.cars.filter(item => item.car === car)[0],
        price = info.getPrice();
        if(customer === info.customer && customer.funds >= price) {
            customer.funds -= price;
            info.car.isParking = false;
            return this.cars.splice(this.cars.indexOf(info), 1).car;
        }
    }
    getPrice(car) {
        let info = this.cars.filter(item => item.car === car)[0];
        return info.getPrice();
    }
}

class Customer {
    constructor(name, funds) {
        this.name = name;
        this.funds = funds;
    }
}

class Car {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        this.isParking = false;
    }
}

class ParkingInfo {
    constructor(customer, car, price) {
        this.customer = customer;
        this.car = car;
        this.price = price;
        this.putDate = Date.now();
    }
    getPrice() {
        const MILLISECONDS_IN_DAY = 86400000;
        let daysInParking = (Date.now() - this.putDate) / MILLISECONDS_IN_DAY;
        return daysInParking * this.price;
    }
}

let parkingLot = new ParkingLot(10, 5),
    customer = new Customer('John', 500),
    car = new Car('BMW3', customer);

console.log('hasPlaces: ', parkingLot.hasPlace());
Date.now = () => 0;
parkingLot.put(car, customer);
Date.now = () => 86400000 * 5;
console.log('getPrice: ', parkingLot.getPrice(car));
parkingLot.take(car, customer);
console.log('customer: ', customer.name, customer.funds);