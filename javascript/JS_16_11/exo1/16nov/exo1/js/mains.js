/*
Afficher un message dans la console
*/
    console.log('Hello Javascript');
    console.error('Bad value...');
//
/*
 Création de variables
*/
    var userName = 'Andrieu Cornilleau';// Version ES5
    //console.log(userName);
    let firstName = 'Chuck';// Version ES6 de var
    const birthDate = 1996; //Nouveaute ES6
//
/*
Les types de variables
*/
    let isBoolean = true;// true || false (1||0)
    let isString = 'Du texte';
    let isInteger = 12312313;
    let isFloat = 123.5678;
    let isArray = ['Hello',123, false, isString, ['world', isInteger]];

    console.log(isBoolean, isString, isInteger, isFloat, isArray);
//

/*
Intégrer une balise HTML dans une variable
*/
    let myTitle = document.querySelector('h1');
    console.log(myTitle);
//

/*
Templating de string
*/
    let firstCar = 'Volvo';
    let secondCar = "Nissa";

    //Concat. version ES5
    let message = "J'ai deux voiture, une "+firstCar +" et une "+ secondCar;
    //Concat. version ES6
    let newMessage = `
    J'ai deux voiture, une ${firstCar} et une ${secondCar}`;
    console.log(message, newMessage);

//
/*
Déclarer un objet
*/
    let myObject= {
        firstName: 'Andrieu',
        lastName: 'Cornilleau',
        birthDate: 1996,
        sayHello: () =>{
            console.log(`hello my name is ${myObject.firstname}`);
        }
    };
//Afficher l'ibjet dans la console
console.log(myObject);
//Exécuter la fonction de l'objet
    myObject.sayHello;
//