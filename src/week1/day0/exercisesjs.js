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


//par
function isEven(num) {
  if (num == 0) {
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

function countBs(word) {
  let totalBs = 0;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] == 'B') {
      totalBs++;
    }
  }
  return totalBs;
}

// function range(start,end){}  // range:function(){}
function range(start, end) {
  var toreturn = [];
  for (let i = start; i <= end; i++)
    toreturn.push(i);

  return toreturn;
}

//---------------------------------------

function countChar(word, letter) {
  let totalBs = 0;
  for (let i = 0; i < letter.length; i++) {
    if (word[i] == letter) {
      totalBs++;
    }
  }
  return totalBs;
}


function sum(arr) { //[3,5,7]
  let suma = 0;
  for (i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  return suma;

}

//---------------

function stepRange(start, end, step) {
  var toreturn = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      toreturn.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      toreturn.push(i);
    }

  }
  return toreturn;
}