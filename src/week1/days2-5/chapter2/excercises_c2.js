// looping triangle
console.log("looping triangle");
let figure = "";
for (let cont = 0; cont < 7; cont++) {
    figure += "#";
    console.log(figure);
}

// print numbers
console.log("print numbers, Fizz, Buzz, FizzBuzz");
for (let cont = 1; cont <= 100; cont++) {
    if (cont % 3 == 0) {
        console.log(cont, " - Fizz");
    } else if (cont % 5 == 0) {
        console.log(cont, " - Buzz");
    } if (cont % 3 == 0 && cont % 5 == 0) {
        console.log(cont, " - FizzBuzz");
    } else {
        console.log(cont);
    }
}

console.log("chessboard 8x8");
let chessLine = "# # # # # # # #"
for (let cont = 0; cont < 8; cont++) {
    if (cont % 2 != 0){
        console.log(" ", chessLine);
    } else {
        console.log(chessLine);
    }
}

console.log("chessboard size");
let chessSize = 10;
let colChar = "";
for (let line = 0; line < chessSize; line++) {
    let chessLine = "";
    for (let col = 0; col < chessSize; col++) {
        chessLine += colChar + "# ";
    }
    if (line % 2 != 0){
        chessLine = " " + chessLine
    } else {
        chessLine = "" + chessLine
    }
    console.log(chessLine);
}