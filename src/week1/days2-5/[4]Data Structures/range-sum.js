function range(start, end){
   let array = [];
   if(start<end){
      for(let i = start; i<= end; i++)
         array.push(i);
   }
   else{
      for(let i = start; i>= end; i--)
         array.push(i);
   }
   return array;
}

function sum(array){
   let totalSum = 0;
   for(let i=0; i<array.length; i++)
      totalSum+= array[i];
   return totalSum;
}


function range(start, end, step = start < end ? 1 : -1) {
   let array = [];

   if (step > 0) {
      for (let i = start; i <= end; i += step) 
         array.push(i);
   } else {
      for (let i = start; i >= end; i += step) 
         array.push(i);
   }
   return array;
}


/* [TEST]
console.log("------------- Without step --------------------");
console.log(range(1, 10));
console.log(range(-5,-2));
console.log(range(10, 1));
console.log(range(-2,-5));
console.log(range(5, 5));
console.log(range(-5,-5));
console.log("------------- Positive step --------------------");
console.log(range(1, 10, 2));
console.log(range(-5,-2, 2));
console.log(range(10, 1, 3));
console.log(range(-2,-15, 3));
console.log(range(5, 5, 2));
console.log(range(-5,-5, 2));
console.log("------------- Negative step --------------------");
console.log(range(1, 10, -2));
console.log(range(-5,-2, -2));
console.log(range(10, 1, -3));
console.log(range(-2,-15, -3));
console.log(range(5, 5, -2));
console.log(range(-5,-5, -2));
*/