let first = 0;
let second = 2;
let third = 10;
let fourth = 22;
let fifth= true;

console.log(first>second);
console.log(first>=second);
console.log(first<second);
console.log(first<=second);

console.log( fourth % third);
console.log(!fifth);
console.log(++first);
console.log(--second);

let userAge = 25;
  // conditions if, else if , else...  
if(userAge>= 40){
        console.log("T'es vieux");
 }else if(userAge>=19){
        console.log('majeur');
} else {
        console.log('trop jeune');
};
// ET logique &&
if(userAge >=20 && userAge <=40){
    console.log("Entre 20 et 40 ça passe");
}
// OU logique ||
if(userAge ==20 || userAge ==40){
    console.log('20 ou 40');
};

// comparaison deux variable
let firstNumber = 12;
let secondNumber = '12';
 if(firstNumber === secondNumber){
    console.log('Vrai');
 } else{
     console.log('False');
 };

 //conditions ternaires

 let myTest = false;
 myTest === true? console.log('Vrai'): console.log('Faux');

























