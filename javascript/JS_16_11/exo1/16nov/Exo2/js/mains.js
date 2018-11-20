/*
Création d'une fonction en ES5
*/
    function sayHello( nameParam){
        console.log(`Hello ${nameParam}`);
    };

    let sayCiao = function(nameParam){
        console.log(`Ciao ${nameParam}`);
    }
    //Appeler la fonction
    sayHello('Andrieu');
    sayHello('Emilie');
    sayHello('Robert');
//

/*
Création de fonction en ES6
*/
    const sayHola = (nameParam) => {
        console.log(`Hola ${nameParam}`);
    };

    const sayHolaSecond = nameParam => console.log(`Hola ${nameParam}`);
    //Appeler la fonction
    sayHola(`Steve`);
    sayHolaSecond(`Steve`);
//