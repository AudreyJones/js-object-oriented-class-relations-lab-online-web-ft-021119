let store = {drivers:[],passengers:[],trips:[]}

let driverId = 0

class Driver {
    constructor(name) {
        this.id = ++ driverId
        this.name = name
        store.drivers.push(this)
    }
    trips() {

    }
    passengers() {

    }
}

let passengerId = 0
class Passenger {
    constructor(name) {
        this.id = ++passengerId
        this.name = name
        store.passengers.push(this)
    }
    trips() {

    }
    drivers() {

    }
}

// Trips = JOIN Table
let tripId = 0
class Trip {
    constructor(driver, passenger){
        this.id = ++tripId
        this.passenger = passenger
        
        if(driver){
            this.setDriver(driver);
        }

        if(passenger) {
            this.setPassenger(passenger);
        }

        store.trips.push(this)
    }

        setDriver(driver){
            this.driverId = driver.id;
        }
        
        setPassenger(passenger){
            this.passengerId = passenger.id;
        }
}