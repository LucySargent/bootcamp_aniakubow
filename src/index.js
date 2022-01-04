// variables

// numeric
// var w = 1

// string
// var x = 'one'

// boolean
// var y = true

// array
// var z = [1, 2, 3]

//undefined
// var a

// global scope

// var lastName = "Sargent"

// function printName() {
//     var given_name = "Mack"
//     console.log("printName: ", "Hi " + given_name)
// }
// printName()

// function printFullName() {
//     console.log("printFullName: ", "Hi " + given_name + " " + lastName)
// }
// printFullName()

// example let

// let count = 0
// function increment(){
//     return count = count + 1
// }
// console.log(increment())

// example const

// const first_name = "Doug"
// function sendText(){
//    return ("hey " + first_name + " you left your phone in the car")
// }
// console.log(sendText())

// function orderCoffee(){
//     const coffee = "flat white"
//     const tea = "english breakfast"
//     return ("Please can I get a " + coffee + " and an " + tea + "?")
// }
// console.log(orderCoffee())

// const time  = 17

// if (time > 0 && time < 12 ) {
//     console.log("Good morning")
// } else if (time === 12){
//     console.log("It is noon")
// } else if (time > 12 && time <= 17) {
//     console.log("Good afternoon")
// } else if (time >= 18 && time <= 24) {
//     console.log("good evening")
// }

// MATHEMATICAL OPERATORS

// Modulus - tells us what the remainder is.
// console.log(10 % 3)
// answer is 1 remaining
// console.log(10 % 8)
// answer is 2 remaining
// console.log(10 % 5)
// answer is 0 remaining

// Increment
// let count = 10
// count ++
// console.log(count)
// answer is 11

// Decrement
// let count = 20
// count --
// console.log(count)
// answer is 19

// Unary negation - makes something negative by adding a negative
// let x = 4
// console.log(-x)

// Unary plus - can be used to turn strings into numbers
// let y = '4'
// console.log(+y)

// Exponential operator - calculates the base to the exponent power
// let z = 5
// console.log(z ** 5)

// ASSIGNMENT OPERATORS

// Assignment
// x = 6

// Add, subtract, divide, multiply in JS
// Addition Assignment x = x + y
// x += 5

// Subtraction Assignment x = x - y
// x -= 5

// Multiplication Assignment x = x * y
// x *= 5

// Division Assignment x = x / y
// x /= 5

// Remainder assignment (modulus)
// x % 5

// Exponentiation assignment x = x ** y
// x **= 5

// console.log(x)

// COMPARISON OPERATORS - we are checking when we use these operators
let x = 20;

// Equal (with numbers and strings)
// console.log(x == 20)
// console.log(x == '20')

// Not Equal
// console.log(x != 20) //false
// console.log(x != '20') //false - it sees 20 and '20' as the same

// Deeply Equal - needs it to be the same value and same data type
// console.log(x === 20)

// Strict not Equal
// console.log(x !== 20) //false
// console.log(x !== '20') //true because 20 is not equal to '20' (stricter than !=)

// Greater than
// console.log(x > 5)

// Greater or equal
// console.log(x >= 30) //false

// Less than
// console.log(x < 5) //false

// Less or equal
// console.log(x <= 30) //true

// LOGICAL OPERATORS
// const fruit = ['apple', 'banana', 'grape']
// console.log(fruit.includes('apple'))
// console.log(fruit.includes('peach'))
// console.log(!fruit.includes('peach'))
// console.log(fruit.includes('coconut') || fruit.includes('grape'))

// And
// if (fruit.includes('apple') && fruit.includes('banana')) {
//     console.log('both fruits exist')
// }

// Or
// if (fruit.includes('coconut') || fruit.includes('banana')) {
//     console.log('at least one fruit exists')
// }

// Not
// if (!fruit.includes('cherry')) {
//     console.log('that fruit is missing')
// }

// TERNERY OPERATOR

// let isGameOver = false
// this code can be reduced to one line

// if (isGameOver == true) {
//     console.log('Sorry, you lost!')
// } else {
//     console.log('Carry on playing')
// }

// isGameOver ? console.log('Sorry, you lost!') : console.log('Carry on playing')

// fizz buzz

// let number = 14
//v1
// if (number % 15 === 0) {
//     console.log('fizz buzz')
// } else if (number % 3 === 0) {
//     console.log('fizz')
// } else if (number % 3 !== 0)  {
//     console.log('buzz')
// }

//v2
// if (number % 15 === 0) {
//     console.log('fizz buzz')
// } else if (number % 3 === 0) {
//     console.log('fizz')
// } else if (number % 5 === 0)  {
//     console.log('buzz')
// } else {
//     console.log(number)
// }

// FOR LOOPS

// this code starts at 0
// for (let i = 0; i < 10; i++) {
//     console.log(i + ' mangoes on the tree')
// }

// // this code starts at 1
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1 + ' mangoes on the tree')
// }

// this code starts at 5
// for (let i = 0; i < 10; i++) {
//     console.log(i + 5 + ' mangoes on the tree')
// }

// this code makes mangoes single for 1 mango
// for (let i = 0; i < 10; i++) {
//   if (i === 0) {
//     console.log(i + 1 + " mango on the tree");
//   } else {
//     console.log(i + 1 + " mangoes on the tree");
//   }
// }

// Fizz Buzz with a for loop

// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("fizz buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// for(let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//         console.log('fizz buzz')
//     } else if (i % 3 === 0) {
//         console.log('fizz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(i)
//     }
// }

// ARRAYS

// let books = ['Moby Dick', 'Life of Pi', 'Sapiens', 'The Hungry Caterpillar', 'New Earth', 'Sapiens', 'Oxford Dictionary', 'Sapiens']
// console.log(books.length)
// console.log(books[2])

// let count = 0
// for (let i =0; i < books.length; i++) {
//     console.log(books[i])
//     if (books[i] === 'Sapiens') {
//         count = count + 1
//         console.log(count)
//     }
// }

// OBJECTS

// const user = {
//     name: 'Lucy',
//     lastName: 'Sargent',
//     pets: 'True'
// }

// console.log(user.pets)

// ARRAY OF OBJECTS
// const users = [
//     {
//         username: 'Mo244',
//         followers: 34,
//         is_followed: false
//     },
//     {
//         username: 'Angela_boo',
//         followers: 133,
//         is_followed: true
//     },
//     {
//         username: 'Rick21',
//         followers: 234421,
//         is_followed: true
//     },
// ]

// console.log(users[0].is_followed)

// for(let i = 0; i < users.length; i++) {
//     // console.log(users[i])
//     if (users[i].is_followed === true) {
//         console.log('Hi,' + users[i].username + ' how are you?')}
//     }

// FUNCTIONS
// Functions make code re-useable. Below we pass through two parameters - name and time. You can call them anything but the order you pass them through is important.
// camelCase for naming functions - best practice
// let name = 'Amy'

// function sendText (name, time) {
//     console.log('Hey ' + name + ', do you want to hang out at ' + time + '?')
// }

// sendText('Sally', 1)
// sendText('Jack', 4)

// function sendReminder (name, time) {
//     console.log('Dear ' + name + ', your meeting is at ' + time)
// }

// sendReminder('Joe', 3)
// sendReminder('Judy', 2)
// sendReminder('Abrahim', 11)
// sendReminder('Frank', 12)

// Invoking a function which updates a global variable (count)
// let firstname = 'Ania'
// let count = 1

// function showAlert() {
//     console.log(firstname + ', wake up! This is alarm number ' + count + '!')
//     count += 1
// }

// showAlert()
// showAlert()
// showAlert()
// showAlert()
// showAlert()
// showAlert()

// MOVE BOB

// const bob = document.querySelector('.face') //picks out an element from the html document. Getting the class of 'face'
// let count = 0
// function moveBob () {
//     count += 50
//     console.log(count)
//     bob.style.left = count + 'px'
//     bob.style.backgroundColor = 'red';
// }

// bob.addEventListener('click', moveBob)

// FUNCTIONS AS A FUNCTION EXPRESSION - not used often
// const bob = document.querySelector('.face')
// const speak = function(){
//     console.log("Greetings!")
// }
// bob.addEventListener('click', speak)

// ARROW FUNCTION (basically remove 'function' (see above) and add =>)
// const bob = document.querySelector('.face')
// const speak = ()=> {
//     console.log("Greetings!")
// }
// bob.addEventListener('click', speak)

// WHILE LOOP - lets you execute code as long as a statement is true, over and over until it is not true
// how to prevent an infinite loop
// let i = 0;
// while (i < 100) {
//   if (i === 1) {
//     console.log(i + " apples on the tree");
//     i++;
//   }
// }

// adding an if/else
// let i = 0;
// while (i < 100) {
//   if (i === 1) {
//     console.log(i + " apple on the tree");
//     i++;
//   } else {
//     console.log(i + " apples on the tree");
//     i++;
//   }
// }

// BUILT-IN OBJECTS
// .length
// Can be used on string or array

// const word = 'banana'
// console.log(word.length)

// const fruit = ['apple', 'banana', 'grape']
// console.log(fruit.length)

// outlier example
// we can use balls.length even though balls is not an array because length exists as a property on the nodelist
// const balls = document.querySelectorAll('.ball')
// console.log(balls.length)

// .concat() method
// used to merge two or more things together
// eg. with strings
// const string1 = 'Say cheese, '
// const string2 = 'Ania'
// console.log(string1.concat(string2))

//eg. with arrays
// this method does not change existing arrays, it creates a new array
// const array1 = ['1', '2', '3']
// const array2 = ['4', '5', '6']
// const array3 = ['7', '8', '9']

// const newArray = array1.concat(array2)
// const nextNewArray = array1.concat(array2, array3)
// const finalArray = newArray.concat(array3)
// console.log('array 1:', array1)
// console.log('array 2:', array2)
// console.log('new array:', newArray)
// console.log('final array: ', nextNewArray)

// concat an aray and a string
// console.log(array1.concat(string1))

// .join() method
// returns a NEW string (unlike .concat)

//const textDisplay = document.querySelector('.text')
//const emotions = ['Happy', 'Sad', 'Pleased']
// this code creates one new string - Happy,Sad,Pleased
//const newWord = emotions.join()
// this code gets rid of the comma by parsing through and empty string - HappySadPleased
//const newWord2 = emotions.join('')
// this code displays the new const in the browser
// textDisplay.innerHTML = newWord2

// .pop() method
// removes the last element of an array (changes the array)
// const display = document.querySelector('.display')
// const movies = ['Argo', 'Sing', 'Top Gun']
// console.log(movies)
// movies.pop()
// display.innerHTML = movies

// .shift()
// removes the first element of an array (changes the array) 
// const display = document.querySelector('.display')
// const movies = ['Argo', 'Sing', 'Top Gun']
// console.log(movies)
// movies.shift()
// display.innerHTML = movies

// .unshift()
// adds to the beginning of an array (changes the array)
// const display = document.querySelector('.display')
// const plays = ['Chicago']
// console.log(plays)
// plays.unshift('Wicked', 'Cats')
// console.log(plays)
// display.innerHTML = plays

// .push()
// adds to the end of an array (changes the array)
// const display = document.querySelector('.display')
// const actors = ['Pitt']
// actors.push('de Niro', 'Streep')
// display.innerHTML = actors

// .splice() 
// lets us remove parts of an array and/or add to an array
// does not change existing array but produces new ones
// splice needs 2 index parameters - the start index (item to remove) and delete count from the start. To remove water from drinks: 0,1. If adding only it would be 0,0

// const display = document.querySelector('.display')
// const drinks = ['water', 'tea', 'coffee']
// console.log('all drinks: ', drinks)
// const coldDrinksOnly = drinks.splice(0,1, 'hot chocolate')
// console.log('cold Drinks: ', coldDrinksOnly)
// display.innerHTML = drinks

const display = document.querySelector('.display')
const shoes = ['trainers', 'slippers', 'boots']
// code showing removing trainers and adding heels at index 0
// shoes.splice(0,1, 'heels')
// code showing removing boots and adding wellies at index 2
// shoes.splice(2,2, 'wellies')
// code showing adding sandals at index 2 - we want to remove 0 elements at index 2
shoes.splice(2,0, 'sandals')
display.innerHTML = shoes


