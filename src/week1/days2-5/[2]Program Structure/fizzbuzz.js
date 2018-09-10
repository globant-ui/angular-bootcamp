for(let n=1; n<=100; n++){
   let isDivisibleBy3 = n%3==0;
   let isDivisibleBy5 = n%5==0;
   let value = "";
   if(isDivisibleBy3)
      value = "Fizz"
   else{
      if(isDivisibleBy5)
         value = "Buzz";
      else
         value = n;
   }
   console.log(value);
}

for(let n=1; n<=100; n++){
   let isDivisibleBy3 = n%3==0;
   let isDivisibleBy5 = n%5==0;
   let value = "";
   if(isDivisibleBy3)
      value+="Fizz";
   if(isDivisibleBy5)
      value+="Buzz";
   console.log(value || n);
}

