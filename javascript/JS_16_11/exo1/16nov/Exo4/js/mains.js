/*
Déclaration des variables
*/
    let userCollection = [];
    let myButton = document.querySelector('button:nth-of-type(1)');
    let myButtonHello = document.querySelector('button:nth-of-type(2)')
    // console.log(myButton);

    //Ajouter un item dans un tableau
    // userCollection.push('Andrieu');
    // console.log(userCollection);
//
/*
ajouter 3 user
 */
userCollection.push ( new User('john', 'Doe',2008));
userCollection.push ( new User('Patrick', 'Truck',1988));
userCollection.push ( new User('Michel', 'Michel',1974));
/*
définir le model objet construtor
*/
    function User(paramFirstName, paramLastName, paramBirthDate){
        this.firsName = paramFirstName;
        this.lastName = paramLastName;
        this.birthDate = paramBirthDate;
    
    };
    User.prototype.sayHello = () =>{
        console.log(`Salut, je suis ${this.firsName} ${this.lastName}`);
    };

/* 
Capter le click sur le bouton ES5
*/
    // myButton.addEventListener('click', function(){
    //     let askFirstName = prompt ('votre prénom');
    //     userCollection.push(askFirstName);
    //     console.log(userCollection);
    // });
//
/* 
Capter le click sur le bouton ES6
*/
     myButton.addEventListener('click', () =>{
         let askFirstName = prompt('votre prénom');
         let askLastName = prompt('votre nom');
         let askBirthDate = prompt('votre date de naissance');
         userCollection.push(new User(askFirstName, askLastName, parseInt(askBirthDate)));
         console.log(userCollection);
 });
//
/*
-Ajouter un bouton dans le DOM
-Capter le click sur ce bouton
-Au clic faire un salut
 */
   myButtonHello.addEventListener('click', () =>{
    for( let i = 0; i< userCollection.length; i++){
    userCollection[i].sayHello();
    let userAge = currentYear- userCollection[i].birthDate;
     if( userAge >= 18){
         console.log('Majeur');

     } else {
         console.log('Mineur');
     };
    };
   });
 
    