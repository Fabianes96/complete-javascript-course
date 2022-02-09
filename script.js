"use strict";

// const luftansa = {
//   airline: 'Luftansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNumber,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNumber}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNumber}`,name})
//   },
// }

// luftansa.book(239, 'qwerty')

// console.log(luftansa.bookings);
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }

// const book = luftansa.book;

// book.call(eurowings,23,'Sarah Williams');
// console.log(eurowings);

// const bookEW = book.bind(eurowings)
// bookEW(23,'Steven')

// const addTax = ()=>{
//   return ()=>{

//   }
// }

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1. Python", "2. Rust", "3. C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const choice = Number(
      prompt(`${this.question}\n ${this.options.join('\n')}\n(Write an option)`)
    );
    if(choice>= 0 && choice <4){
      this.answers[choice] += 1;
    }else{
      console.log("Not a valid option");
    }
    this.displayResults()
  },
  displayResults(type='array'){
    if(type === 'array'){
      console.log(this.answers);
    }else{
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

const answerBtn = document.querySelector(".poll");
answerBtn.addEventListener('click',poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers:[1,2]},'string');
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string');
