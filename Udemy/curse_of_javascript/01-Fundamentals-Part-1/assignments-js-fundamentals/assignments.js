/* Exercice 1 */
const country = 'Brasil';
const continent = 'South-America';
let population = 211755692;

console.log(country, continent, population);


/* Exercice 2 */
const isIsland = false;
const language = 'Portuguese';

// console.log(isIsland, population, country, language);

// Exercice 3 
// language = 'English'; error
console.log(language);

// Exercice 4 
console.log(population / 2);
population += 1;
console.log(population);

if (population > 6000000) console.log("Yes, my country has more population");
if (population > 33000000) console.log("Yes, my country has more population");

const description = `${country} is in ${continent}, and it's ${population} people speak potuguese`;
console.log(description);   
