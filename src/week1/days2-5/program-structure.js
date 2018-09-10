/* Program structure */

/* Exercise 1: Looping a triangle */
function triangle() {
  for (let print = '#'; print.length < 8; print += '#') {
    console.log(print);
  }
}

/* Exercise 2: Fizz Buzz */
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let toPrint = "";
    if (i % 3 === 0)
      toPrint += "Fizz";
    if (i % 5 === 0)
      toPrint += "Buzz";
    console.log(toPrint || i);
  }
}

/* Exercise 3: Chessboard */
function chessboard() {
  let size = 8;
  let line = "";

  for (let i = 0; i < size; i++) {
    line = '';
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0)
        line += ' ';
      else
        line += '#';
    }
    console.log(line + '\n');
  }
}
