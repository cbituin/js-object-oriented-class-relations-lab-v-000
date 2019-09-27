 let store = {
   drivers: [],
   passengers: [],
   trips: []
 };
 
 let driverID = 0;
 class Driver {
     constructor(name) {
       this.id = ++driverID;
       this.name = name;
       store.drivers.push(this);
     }
  }
  
  let passID = 0;
  class Passenger {
    constructor(name){
      this.id = ++passID;
      this.name = name;
      
      store.passengers.push(this);
    }
  }
  
  let tripID = 0;
  class Trip {
    constructor(driver, passenger){
     this.id = ++tripID;
     if (driver) {
        this.driverID = driver.id;
      }
      if(passenger){
        this.passID = passenger.id;
      }
     store.trips.push(this);
    }
  }
  
  store;