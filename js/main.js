///////////////////----1-MISOL----///////////////////////////////////////

let text  = document.querySelector("#title");
 let number = Number(prompt("Son kiriting"));
 let number2 = Number(prompt("Son kiriting"));
 let numArrays = [];

 function sumInput ( num1,num2){
    let summ = 0;
    
       numArrays.push(num1, num2);
       for (let i = 0; i < numArrays.length; i++) {
          summ = summ + numArrays[i];
       }
      if (isNaN(summ)) {
         alert("Invalid ")
      }else{
         text.textContent = summ
    }

 }
sumInput(number,number2);

///////////////////////////////----2-MISOL-------- /////////////////////////////

let text2 = document.querySelector("#title-2");

let salaries = {
   "Akmal": 1200,
   "Salim": 5200,
   "Karima": 1800
}

function sumSalaries(salaries) {

   let sum = Object.values(salaries);
   let sumResult = 0;
   for (const value of sum) {
      sumResult += value;
   }
   text2.textContent = sumResult
}
sumSalaries(salaries)

