function isEven(n){
   if(isNaN(n))
      return "n is not a number";
   if(n<0)
      return "n must be positive";
   else
      return isEvenNumber(n);

}

function isEvenNumber(n){
   if(n==0)
      return true;
   else{
      if(n==1)
         return false;
      else
         return isEvenNumber(n-2);
   }
   
}

function isEven(n){
   if(isNaN(n))
      return "n is not a number";
   else
      return isEvenNumber(n);

}

function isEvenNumber(n){
   if(n==0)
      return true;
   else{
      if(n==1)
         return false;
      else{
         if(n<0)
            return isEvenNumber(n+2);
         else
            return isEvenNumber(n-2);
      }         
   }   
}