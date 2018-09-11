

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < i; j++) {
    console.log('#')
  }
}


var i, j = 0,
  line = '';


for (i = 0; i <= 7; i++) {
  line = ''
  for (j = 0; j < i; j++) {
    line += '#'
  };
  console.log(line);
}

//-----------------------------
var i;
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz")
  } else {
    if (i % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

//-----------------------------


var board = "";
var fullEmpty = "# # # # ";
var emptyfull = " # # # #";
var size = 8;
for (var i = 0; i < size; i++) {

  if (i % 2 == 0) board = board + fullEmpty + '\n';
  else board = board + emptyfull + '\n';
}

console.log(board);
//--------------------------------

function min(Num1, Num2) {
  if (Num1 < Num2)
    return Num1;
  else {
    return Num2;
  }
}
console.log(min(0, -10));
console.log(min(0, 10));
//-----------------------------------

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else if (num == 1) {
    return false
  } else if (num < 0) {
    return isEven(-num);

  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//-------------------------------------


