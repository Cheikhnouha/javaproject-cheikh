 const prompt = require("prompt-sync")();
  
 let tabbs = [];
 let filem  = null;
 filem = prompt("dommer le premier element :")
 tabbs.push("filem")
 filem = prompt("dommer le  deuxieme element :")
 tabbs.push("filem")
 filem = prompt("dommer le troisieme element :")
 tabbs.push(filem);
 tabbs[1] = prompt(" modiffier le deuxieme film :") 
 console.log(tabbs)
tabbs.unshift(" fallbaye")
console.log(tabbs)
 
  
 /*
 let note = prompt("Donner votre note en anglais :");

  if(note > 15) { 
   console.log("bien :")
  } else if (note >= 12){
   console.log(" assez bien :")
  } else if (note >=10){
    console.log("mauvaise :")
  }else {
   console.log("continuer le programm")
  }
  */

  /*let jour = prompt("donner le plat du jour de la semaine :")
  if(jour == "lundi"){
   console.log("premarer maffé")
  } else if(jour == "mardi") {
    console.log("preparer domoda")
  }else if(jour == "mercredi"){
   console.log("preparer soupou kandia")
  }else if(jour == "jeudi"){
   console.log("thieb")
  }else if(jour == "vendredi"){
   console.log("thiebou yapp")
  }else{
   console.log("fin plat")
  }
  */
    /*
  let jour = prompt(" donne l e  plat du jour  de la semaine")
  switch (jour){
    case 'Lundi':
    console.log("preparer maffé")
    break;
    case 'mardi':
    console.log("preparer dmoda")
     break;
   case 'mercredi':
    console.log("preparer soupou kandia")
     break;
     case 'jeudi':
      console.log("preparer thieb")
      break;
      case 'vendredi':
       console.log("thiebou yapp")
       break;
       default :
       console.log(" fin plat")
      }
*/

  /*
const tasks = [];
tasks.push(prompt("Donner la premier item :"))
tasks.push(prompt("donner la deuxieme item :"))
tasks.push(prompt("donner la troixieme itel :"))

tasks[0] = prompt("donner le nonner de la modification de la  premier item :" )
console.log(tasks)
console.log(tasks)
console.log(tasks.pop())
console.log(tasks.shift())
*/

  
  

