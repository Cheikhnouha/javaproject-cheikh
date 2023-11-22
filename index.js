
const prompt = require("prompt-sync")();
  
var age = 10;
age = 123;
age = 1234
 let nom = "barro"
 let prenom ="cheikh"
 // Concatenation d une chaine de chartere
 let firstName = "doudou" 
 let lastName = "fall"
 let formation  = "javascrip"
 let nomComplet = firstName + ' '+lastName
 let message  = "Bonjour je m appel " + firstName + " " + lastName +" " +"je fais la formation"+ " " + formation;
 let message2 = `Bonjour je m'appelle ${prenom} ${nom}, je fais la formation ${formation}`
 // le nombre d element du message2
 console.log("message2",message2.length)
// la position du  premier item du du variable message
// le dernier element signifie -1 Ok se sera length -1
 console.log("message",message [0])
 let prenomNom = prenom + ' ' + nom
 console.log("bonjour :",prenomNom);

 // EXECICE 
// EXECICE 2
 let name  = "Cheikh  Nouha"
 let message3 = `je suis ${name}`
 console.log(message3.length)
 console.log(name.toLowerCase())

 nom = name.toLowerCase().endsWith("nouha".toLowerCase())
 console.log(nom)

 let Prenom = prompt("Donner votre prenom")
 let nomm  =  prompt("donner votre nom")
 let passwod = prompt("entrer le mot de passe") 
 let motDePasseContent  = passwod.includes(nomm)
 console.log(motDePasseContent)

  

console.log("age",age)
console.log("Bonjout tout le monde!")

// Une fonction qui lie les donnes d'une base de donn

  

 
 
 