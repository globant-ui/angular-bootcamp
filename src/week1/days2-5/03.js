console.log("\nExercise 1");


const range = (start, end, step) => {
    /* if (start > end) return -1; */
    let count = start;
    let arr = [];
    
    if (step == undefined)  step = 1;
    if (start == end ) return start;
    else if (start > end && step > 0) return undefined;  /* Wrong arguments */
    else if (start < end && step < 0) return undefined;  /* Wrong arguments */
    else if (start < end ){       
        while (  count <= end) {
            arr.push(count)           
            count += step;         
        }
    } else {    
        while (  count >= end) {
            arr.push(count)
            count += step; 
    
        }
    }
    return arr;
}

const sum = (vector) => {
    let count = 0;
    for (let key of vector) 
        count += key;    
    return count;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

console.log("\nExercise 2");

const reverseArray = (array_in) => {
    var array_out = [];
    for(var i = array_in.length-1; i >= 0; i--) {
        array_out.push(array_in[i]);
    }
    return array_out;
}

const reverseArrayInPlace = (array_in) => { 
    for(var i =0; i< array_in.length-1; i++) {
        array_in.splice(i, 0, array_in.pop());    
    }
    return array_in;
}


console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
