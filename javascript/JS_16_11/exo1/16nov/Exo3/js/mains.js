/*
Déclarere un tableau userCollection contenant 4 prénoms
*/
    let userCollection = [ 'John','Paul','Ringo','Georges','Yoko'];
//

/*
Saluer chaque item du tableau
*/
    console.log(`Salut ${userCollection[0]}`);
    console.log(`Salut ${userCollection[1]}`);
    console.log(`Salut ${userCollection[2]}`);
    console.log(`Salut ${userCollection[3]}`);
//
/*
Méthode 2
*/
    let index = 0;
     console.log(`Salut ${userCollection[index]}`);
     console.log(userCollection);
     console.log(userCollection.length);
//
/*
Créer une boucle FOR sur une collection de données
*/
    for(let i = 0; i < userCollection.length; i++ ){
         console.log
    };
//

/*
Créer une boucle While sur une collection de données
*/
let i = 0;
while(i< userCollection.length){
    console.log(`Salut ${userCollection[i]}`);
    //incrémenter i
    i++

};
//

/*
Créer une boucle FOR OFF sur une collection de données
*/
    for( let item of userCollection){
      console.log(`Hello ${item}`);
 };
//
/*
Créer une boucle FOR EACH sur une collection de données
*/
    userCollection.forEach( item => {
        for( let item of userCollection){
   console.log(`Hello ${item}`);
        }
 });
//
/*
Déclarer un objet user contenant firstName et lastName
*/
 let user = {
     firstName : 'Andrieu',
     lastName : 'Cornilleau'
 };

// Faire une boucle FOR IN sur les propriétés de l objet
 for(let property in user){
     console.log(property);
     console.log(user[property]);
 };