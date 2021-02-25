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