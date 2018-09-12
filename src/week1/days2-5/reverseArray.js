function reverseArray(array) {
    let salida = [];
    for (let i = array.length - 1; i >= 0; i--) {
      salida.push(array[i]);
    }
    return salida;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  