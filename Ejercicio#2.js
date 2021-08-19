const prompt= require("prompt")

/* 
Pide una nota (numero). Muestre la calificación segun su nota
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/
prompt.start();
let nota= "nota";
prompt.get(nota, function(error,userInput) {
   
  let nota= +userInput.nota
  console.log(typeof(userInput.nota))

  if  (+userInput.nota >= 9 && +userInput.nota == 10 ) {
    console.log("La calificación es sobresaliente.")
  }

  else if  (userInput.nota >= 7 && userInput.nota < 9) {
    console.log("La calificación es notable.")
  }
  
  else if (userInput.nota >= 6 && userInput.nota < 7) {
    console.log("La calificación es bien.")
  }
  
  else if (userInput.nota >= 5 && userInput.nota < 6){   
        console.log("La calificación es suficiente.")
      }
  
  else if (userInput.nota >= 3 && userInput.nota < 5) {
     console.log("La calificación es insuficiente.")
    }
  
  else if (userInput.nota >= 0 && userInput.nota < 3) {
    console.log("La calificación es muy deficiente.")
  }
  
  else {
    console.log("No se encontro ninguna calificación.")
  }
  
}) 
  
