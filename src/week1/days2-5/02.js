console.log("\nExercise 1");

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
const min = (a,b) => {    
    if (a < b ) console.log(a);
    else if (b < a) console.log(b);
    else console.log(a); /* Equal */ 
}

console.log("\nExercise 2");

const isEven = (x) => {
    if (x>=0){
        if (x == 0) return true;
        else if (x ==1) return false;
        else return isEven(x-2);
    } else return -1; /* X is Negative ! */ 
}

console.log("\nExercise 3");

const countBs = (x) => {
    var count = 0;
    for (var i = 0; i < x.length ; i++)
        if(x[i] == 'B') count ++;            
    return count;
}

const countChar = (x,keychar) => {
    var count = 0;
    for (var i = 0; i < x.length ; i++)
        if(x[i] == keychar) count ++;        
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));