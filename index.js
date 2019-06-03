let store = {drivers:[],passengers:[],trips:[]}

let driverId = 0

class Driver {
    constructor(name) {
        this.id = ++ driverId
        this.name = name
        store.drivers.push(this)
    }
    trips() {
        return store.trips.filter( 
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        )
    }
    passengers() {
        // console.log(store.trips); OR console.log(this.trips());
        // Trip { id: 15, driverId: 15, passengerId: 24 },
        // Trip { id: 16, driverId: 15, passengerId: 25 }
        
        // console.log(store.passengers);
        // Passenger { id: 24, name: 'Bob' },
        // Passenger { id: 25, name: 'Susan' }
        return store.passengers.find(
            function(passenger) {
                return trip.passengerId === this.userId;
            }.bind(this)
        )
            
        
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
        return store.trips.filter( 
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        )
    }
    drivers() {
        return store.drivers.filter( 
            function(driver) {
                return driver.passengerId === this.id;
            }.bind(this)
        )
    }
}

// Trips = JOIN Table
let tripId = 0
class Trip {
    constructor(driver, passenger){
        this.id = ++tripId
        
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