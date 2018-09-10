function reverseArray(array) {
   let newArray = [];
   for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
   }
   return newArray;
}

function reverseArrayInPlace(array) {
   let maxLoop = Math.floor(array.length/2);
   for (let i = 0; i < maxLoop; i++) {
      let aux = array[i];
      let switchPosition = array.length-1-i;
      array[i] = array[switchPosition];
      array[switchPosition] = aux;
   }
   return array;
}