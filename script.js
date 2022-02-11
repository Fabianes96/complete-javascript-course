'use strict'

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function(make,speed){
  this.speed = speed
  this.make = make
}
Car.prototype.accelerate = function(){
  return this.speed = this.speed + 10
}
Car.prototype.brake = function(){
  return this.speed = this.speed - 5
}
const BMW = new Car('BMW',10)
console.log(BMW.accelerate());

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
class Car2 {
  constructor(make,speed){
    this.make = make,
    this.speed = speed
  }
  accelerate(){
    this.speed +=10;
    console.log(`${this.make} is goint at ${this.speed} k/h`);
  }
  brake(){
    this.speed -= 5;
    console.log(`${this.make} is goint at ${this.speed} k/h`);
  }
  get speedUS(){
    return this.speed / 1.6
  }
  set speedUS(speed){
    this.speed = speed*1.6
  }
}

const ford = new Car2('Ford',120);


//Inheritance between "classes"

const Person = function(firtsName, birthYear){
  this.firtsName = firtsName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

const Student = function(firtsName,birthYear,course){
  Person.call(this,firtsName,birthYear)
  this.course = course
} 

//Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firtsName} and I study ${this.course}`);
}
const mike = new Student('mike',2020, 'Computer Science');
mike.introduce()

