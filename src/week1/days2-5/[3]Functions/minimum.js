function minimum(num1, num2){
   if(isNaN(num1) || isNaN(num2))
      return "both values must be numbers";
   if(num1<num2)
      return num1;
   else
      return num2;
}