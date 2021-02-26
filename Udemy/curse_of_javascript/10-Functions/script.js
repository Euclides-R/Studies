'use strict';

///////////////////////////////////
// Default Parameters
/*

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');*/

////////////////////////////////////////////////////////
// How passing arguments works: Value vs. Reference
/*
const flight = 'LH234';
const Euclides = {
    name: 'Euclides Rodriuges Junior',
    passport: 32488795415,
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    passenger.passport === 32488795415 ?
        alert('Checked In') :
        alert('Wrong passport');
};

checkIn(flight, Euclides);
console.log(flight);
console.log(Euclides);

// Is the same as doing... memory heap
// const flightNum = flight;
// const passenger = Euclides;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(Euclides);
checkIn(flight, Euclides);
// JavaScript don't pass for reference
*/

//////////////////////////////////////////////
// First-Class and Higher-Order Functions

/*
Portanto, JS é uma lingugagem que possui funções de primeira classe, o que em termos
técnicos significa que as funções são os chamados de primeiros cidadãos. Na prática,
isso significa que as funções são simplesmente tratadas como valores. No JavaScript
as funções são apenas outro tipo de objeto, devido a ocasião, uma vez que objetos são
valores, funções são valores também.

Também podemos passar funções como argumentos para outras funções, como também podemos
retornar uma função de outra função. LEMBRE-SE, funções são objetos e muitos tipos de 
objetos em JS têm métodos. JavaScript tem funções de primeira classe, o que torna possível
usarmos e escrevermos funções de ordem superior. Onde uma função de ordem superior é uma
função que recebe outra função como um argumento ou uma função que retorna uma nova função.

Example:
function count() {
    let counter = 0;
    return function() {
        counter++
    }
}
*/

///////////////////////////////////////////
// Functions Accepting Callback Functions
/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    // fn fica acessível para saber o name da função que lhe foi passada
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

///////////////////////////////////////////
// Funsctions Returning Functions
/*
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Euclides');
greeterHey('Verônica');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Euclides');
*/

//////////////////////////////////
// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum} `, name });
    },
};

// lufthansa.book(239, 'Euclides Rodrigues Junior');
// lufthansa.book(635, 'Verônica Cordeiro Rodrigues');
// console.log(lufthansa);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams)

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// The assigment "call" do realizity comunication between one function and another
// howerver much the method was inside the function lufthansa, we can access in the
// method in another function.
// "Call" nada mais é do que um ponteiro.

const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

// book.call(swiss, 53, 'Mary Cooper');

// Apply Method
const flightData = [583, 'George Cooper'];
/* Mas "apply" não é mais usado do js moderno, "apply" tem a necessidade de ter uma matriz de dados porque há um jeito melhor
call pode usar os '...', assim inserindo apenas um array de dados continuos
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

/////////////////////////////////////////////////////////
// The bind Method
/* Just like the call method, bind also allows us to access a method from another function, however
bind does not immediately call a function, but returns a new function where the word 'diski' is linked
book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
*/
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
/* Para que seja possível acessar a função "buyplane" é necessário colocar um ponteiro para ela
uma key, call chamaria instantaneamente, mas não queremos isso, queremos só durante o evento
por isso usamaos bind */

// Partial Aplication