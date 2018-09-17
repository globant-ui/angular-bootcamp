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

console.log("\nExercise 3");


const arrayToList = (array_in) => {
    list = null;
    for(var i = array_in.length-1; i >= 0; i--)
        list = {value: array_in[i], rest: list};    
    return list;
}


const listToArray = (list_in) => {
    let array_out= [];
    for (let node = list; node; node = node.rest) {
        array_out.push(node.value);
    }
    return array_out;
}

function prepend(value, list) {
    return {value, rest: list};
 }

 function nth(list, position) {    
    if (position == 0)   return list.value;
    else return nth (list.rest,position-1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


console.log("\nExercise 4");

const deepEqual = (obj1, obj2) => {
    if( obj1 === obj2) return true;
    else 
        if ( Object.keys(obj1).length !=  Object.keys(obj2).length) return false;
        else
            for (let key of Object.keys(obj1))
                if(!deepEqual(obj1[key],obj2[key]) || !Object.keys(obj2).includes(key))
                    return false;
            return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
