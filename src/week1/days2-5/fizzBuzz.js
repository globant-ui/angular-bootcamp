for (let n = 1; n <= 100; n++) {
    let salida = "";
    if (n % 3 == 0) 
        salida += "Fizz";
    if (n % 5 == 0) 
        salida += "Buzz";
    console.log(salida || n);
  }
  