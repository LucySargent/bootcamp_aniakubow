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
// let x = 20;

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

// const display = document.querySelector('.display')
// const shoes = ['trainers', 'slippers', 'boots']
// code showing removing trainers and adding heels at index 0
// shoes.splice(0,1, 'heels')
// code showing removing boots and adding wellies at index 2
// shoes.splice(2,2, 'wellies')
// code showing adding sandals at index 2 - we want to remove 0 elements at index 2
// shoes.splice(2,0, 'sandals')
// display.innerHTML = shoes

// .forEach()
// const circles = document.querySelectorAll('.circle')
// circles.forEach(circle => circle.style.backgroundColor = 'purple')

// const flowers = document.querySelectorAll('.flower')
// console.log(flowers)
// flowers.forEach(flower => flower.style.backgroundColor = 'yellow')

// const squad = ['Lucy', 'Gi', 'Mack', 'Millie', 'Ben']
// squad.forEach(player => console.log(player + ' Sargent'))

// const fruits = ['pears', 'apples', 'peaches', 'guavas', 'mangoes', 'cherries']
// fruits.forEach(fruit => console.log(fruit))
// fruits.forEach(fruit => console.log(fruit + ' in the bowl'))

// .some()
// if true for some
// const scores = [12, 45, 35, 24, 87, 23, 11]
// console.log(scores.some(score => score > 100))

// const countries = ['America', 'Italy', 'France', 'Iran', 'Ethiopia']
// console.log(countries.some(country => country === 'Russia'))

// const rounds = Array.from(document.querySelectorAll('.circle'))
// const didFlowerGrow = rounds.some(round => round.hasChildNodes())
// console.log(didFlowerGrow)

// .map()
// creates a NEW array

// const ages2018 = [2, 6, 33, 51, 76]
// const ages2022 = ages2018.map(age => age + 4)
// console.log(ages2018)
// console.log(ages2022)

// const housemates2018 = [
//     {
//         person: 'Joe',
//         age: 21
//     },
//     {
//         person: 'Bobby',
//         age: 26
//     },
//     {
//         person: 'Mabel',
//         age: 24
//     }
// ]

// console.log(housemates2018)

// const housemates2022 = housemates2018.map(housemate => housemate.age + 4)
// console.log('housemates2022', housemates2022)

// .filter()
// creates a NEW array

// const containers = ['boxes', 'jug', 'drawers', 'bowls', 'bag']
// displayContainers = containers.filter(container => container.length < 5)
// const showDisplay = document.querySelector('.circle')
// showDisplay.innerHTML = displayContainers

// const containers = [
//         {
//             container: 'Box',
//             material: 'cardboard',
//             size: 'small',
//             quantity: 7
//         },
//         {
//             container: 'jug',
//             material: 'glass',
//             size: 'small',
//             quantity: 10
//         },
//         {
//             container: 'drawer',
//             material: 'wood',
//             size: 'large',
//             quantity: 1
//         },
//         {
//             container: 'bag',
//             material: 'leather',
//             size: 'medium',
//             quantity: 5
//         }
//     ]

// const newContainers = containers.filter(container => container.quantity > 5)
// console.log('newContainers', newContainers)

// .reduce()
// syntax to give you the total of any array of numbers
// const scores = [3, 5, 7, 1, 3]

// total = scores.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(total)
// const total = scores.reduce((oldScore, score) => oldScore + score)
// console.log(total)

// .every()
// if everything in our array matches a rule, return true

// const results = [3, 5, 7, 1, 3]
// const hasClassPassed = results.every(result => result > 0)
// console.log(hasClassPassed)

// const animals = ['cat', 'rat', 'dog', 'ant']
// const newAnimals = animals.every(animal => animal.length === 3)
// console.log(newAnimals)

// .split()
// divides a string into list of substrings

// const sentence = 'I would like some tea'
// const words = sentence.split(' ')
// console.log(words)
// console.log(words[2])

// const letters = sentence.split('')
// console.log(letters)

// ARRAY WORK

// use .map to convert farenheit to celcius
// const farenheit = [23, 140, 212, 41]
// function getCelcius() {
//   return farenheit.map((number) => ((number - 32) * 5) / 9)
// }
// console.log(getCelcius())

// use .map to convert inches to cm
// const inches = [1, 4, 6, 9, 10]
// function getCMS() {
//   return inches.map((cm) => cm * 2.54)
// }
// console.log(getCMS())

// convert acres to sqms
// const acres = [1, 2.5, 5, 10]
// function getSQMS() {
//   return acres.map((acre) => acre * 4047)
// }

// console.log(getSQMS())

// use .some() in a function that checks an array for a 'falsey' value
// eg. checkForFalsey([11, NaN, [], {'angels'}]) => true

// const values = [11, NaN, [], 'angels']

// function checkForFalsey() {
//     return values.some(value => value.length > 100)
// }
// console.log('checkforfalsey', checkForFalsey())

// const values = [11, NaN, [], 'angels']

// function checkForFalsey() {
//     return values.some(value => value === 0)
// }
// console.log('checkforfalsey', checkForFalsey())

// function checkForFalsey() {
//     return values.some(value => value !== 11)
// }
// console.log('checkforfalsey', checkForFalsey())

// !value is checking is something is false
// function checkForFalsey() {
//     return values.some(value => !value)
// }
// console.log('checkforfalsey', checkForFalsey())

// using .reduce write a function that will return the total number
// or characters in an array of strings
// e.g getTotal(['rabbit', 'football', 'cracking']) => 22

// const words = ['rabbit', 'football', 'cracking']
// function getTotal() {
//     return words.reduce((total, word) => total + word.length, 0)
// }
// console.log(getTotal())

// using .every write a function that checks whether every number in
// an array is a square number
// e.g checkSquares([9, 16, 81]) => true
// solution - gets the square root of a number and checks modulus is === 0 (so we know it's a full number)
// const areas = [9, 16, 81]

// function checkSquares() {
//     return areas.every(number => Math.sqrt(number) % 1 === 0)
// }
// console.log(checkSquares())

// using an array method, write a function that returns the string
// elements of an array that have a given length or larger.
// eg. getWords(['Florida', 'dog', 'phone'], 5) => ['Florida','phone']

// const words = ['Florida', 'dog', 'phone', 'eagle', 'jellybeans', 'helicopter', 'yes', 'no']
// const number = 5

// function getWords() {
//     return words.filter(word => word.length >= number)
// }
// console.log(getWords())

// or we can do this USING PARAMETERS which makes the code reusable:

// function getWords(array, number) {
//     return array.filter(word => word.length >= number)
// }
// console.log(getWords(['Florida', 'dog', 'phone', 'eagle', 'jellybeans', 'helicopter', 'yes', 'no'], 5))
// console.log(getWords(['pen', 'letter', 'cheese', 'sea', 'blue'], 6))

// using an array method, write a function that converts an array of cm values
// as strings into an array of numbers.
// eg. getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

function getValues(strings) {
    return strings.map(string=> parseFloat(string))
}
console.log(getValues(['23cm', '5.6cm', '1000cm', 'string']))
console.log(getValues(['63cm', '8.99cm', '125.098cm']))

