"use strict";

// const booking = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     const newBooking = {
//         flightNum: flightNum,
//         numPassengers: numPassengers,
//         price: price
//     }

//     console.log(booking);
//     booking.push(newBooking);
// }

// createBooking("EH45S");
// createBooking("EH45S", 2, 800);
// createBooking("EH45S", 2);

// createBooking("EH45", undefined, 1000)

const flight = "EH45";
const jonas = {
  name: "John",
  passport: "545212318543",
};

const checkIn = function (flightNum, passanger) {
  flightNum = "LH999";
  passanger.name = "Mr" + passanger.name;

  if (passanger.passport === 545212318543) {
    alert("Checked In");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, jonas)
console.log(flightNum);
console.log(jonas);

const flightNum = flight;
const passanger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(passanger)