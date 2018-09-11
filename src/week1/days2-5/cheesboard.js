let salida = "";

for (let y = 0; y < 9; y++) {
  for (let x = 0; x < 9; x++) {
    if ((x + y) % 2 == 0) {
      salida += " ";
    } else {
      salida += "#";
    }
  }
  salida += "\n";
}

console.log(salida);
