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
/*
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
 Mas "apply" não é mais usado do js moderno, "apply" tem a necessidade de ter uma matriz de dados porque há um jeito melhor
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
Para que seja possível acessar a função "buyplane" é necessário colocar um ponteiro para ela
uma key, call chamaria instantaneamente, mas não queremos isso, queremos só durante o evento
por isso usamaos bind

// Partial Aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));

// Challenge
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

//////////////////////////////////////
// Coding Challenge #1
/*
Vamos construir um aplicativo de enquete simples!

Uma enquete tem uma pergunta, uma série de opções que as pessoas podem escolher e uma matriz com o número de respostas para cada opção. Esses dados são armazenados no objeto inicial abaixo.

Aqui estão suas tarefas:

1. Crie um método chamado 'registerNewAnswer' no objeto 'poll'. O método faz 2 coisas:
  1.1. Exibe uma janela de prompt para o usuário inserir o número da opção selecionada. O prompt deve ser assim:
        Qual é a sua linguagem de programação favorita?
        0: JavaScript
        1: Python
        2: ferrugem
        3: C ++
        (Escreva o número da opção)
  
  1.2. Com base no número de entrada, atualize a matriz de respostas. Por exemplo, se a opção for 3, aumente o valor NA POSIÇÃO 3 da matriz em 1. Certifique-se de verificar se a entrada é um número e se o número faz sentido (por exemplo, a resposta 52 não faria sentido, certo?)
2. Chame este método sempre que o usuário clicar no botão "Responder a enquete".
3. Crie um método 'displayResults' que exibe os resultados da votação. O método recebe uma string como entrada (chamada 'tipo'), que pode ser 'string' ou 'array'. Se o tipo for 'array', simplesmente exiba o array de resultados como está, usando console.log (). Esta deve ser a opção padrão. Se o tipo for 'string', exibe uma string como "Os resultados da enquete são 13, 2, 4, 1".
4. Execute o método 'displayResults' no final de cada chamada de método 'registerNewAnswer'.

DICA: Use muitas das ferramentas que você aprendeu nesta e na última seção 😉

BÔNUS: Use o método 'displayResults' para exibir os 2 arrays nos dados de teste. Use as opções 'array' e 'string'. NÃO coloque os arrays no objeto de votação! Então, como deve ser essa palavra-chave nessa situação?

DADOS DE TESTE DE BÔNUS 1: [5, 2, 3]
DADOS DE TESTE DE BÔNUS 2: [1, 5, 3, 9, 6, 1]

BOA SORTE 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  // Professor

  /* Como eu fiz
    if (
      getAnswer === '0' ||
      getAnswer === '1' ||
      getAnswer === '2' ||
      getAnswer === '3'
    ) {
      this.answers[getAnswer] = this.answers[getAnswer] + 1;
      this.displayResults(this.answers);
    } else {
      console.log('This number is not option!');
    }

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
//   displayResults(type) {
//     console.log(this.answers);
//     console.log(`Poll results are ${type}`);
//   },

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

///////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('Thie will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  // const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
