function countBs(string){
   let cantBs = 0;
   for(let charPosition=0; charPosition<string.length;charPosition++){
      if(string[charPosition]=='B')
         cantBs++;
   }
   return cantBs;
}

function countChar(string, char) {
  let cantChar = 0;
  for (let charPosition = 0; charPosition < string.length; charPosition++) {
    if (string[charPosition] == char) {
      cantChar++;
    }
  }
  return cantChar;
}

function countBs(string) {
  return countChar(string, 'B');
}