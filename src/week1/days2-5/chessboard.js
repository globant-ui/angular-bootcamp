chessboard = (num) => {
  let output = "";
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      (i + j) % 2 == 0 ? (output += "") : (output += "#");
    }
    output += "\n";
  }
  console.log(output);
};
