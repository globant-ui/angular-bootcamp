console.log("::: The sum of a range :::")
function range(numStart, numEnd) {
    let range =[];
    if (numEnd > numStart) {
        for (let cont = numStart; cont <= numEnd; cont++) {
            range.push(cont);
        }
    } else {
        for (let cont = numStart; cont >= numEnd; cont--) {
            range.push(cont);
        }
    }
    console.log(range);
    return range;
}

function sum(range) {
    let sumatory = 0;
    for (let index = 0; index < range.length; index++) {
        sumatory += range[index];
    }
    return sumatory;
}

console.log(sum(range(5, 2)));

console.log("::: The sum of a range (modified) :::")
function range2(numStart, numEnd, step) {
    let range =[];
    if (numEnd > numStart) {
        for (let cont = numStart; cont <= numEnd; step == undefined ? cont++ : cont += step) {
            range.push(cont);
        }
    } else {
        for (let cont = numStart; cont >= numEnd; step == undefined ? cont-- : cont += step) {
            range.push(cont);
        }
    }
    console.log(range);
    return range;
}

function sum2(range) {
    let sumatory = 0;
    for (let index = 0; index < range.length; index++) {
        sumatory += range[index];
    }
    return sumatory;
}

console.log(sum2(range2(2, 5)));

// reverse array (exercise 1)
console.log("::: reverse array :::");
function reverseArray(array) {
    let arrayCopy = [];

    for (let i = array.length -1; i >= 0; i--) {
        arrayCopy.push(array[i]);
    }
    
    return arrayCopy;
}

console.log("reverseArray::: ", reverseArray(['A', 'B', 'C']));

// reverseArrayInPlace
console.log("::: reverse array in place:::");
function reverseArrayInPlace(array) {
    console.log("array in::: ", array);
    let middleLength = 0;
    if (array.length % 2 == 0) {
        middleLength = (array.length / 2);
    } else {
        middleLength = parseInt((array.length / 2));
    }

    let first = 0;
    let last = 0;
    for (let index = 0; index < middleLength; index++) {
        first = array[index];
        last = array[(array.length - 1) - index];
        array.splice(index, 1, last);
        array.splice((array.length - 1) - index, 1, first);
    }
    return array;
}

console.log("array out:::", reverseArrayInPlace([1, 2, 3, 4, 5]));

// array to list
console.log("array to list");

function arrayToList(arrayValues) {
    let listValues = {};

    for(let cont = arrayValues.length-1; cont >= 0; cont--) {
        if (listValues.value == undefined) {
            listValues = {"value" : arrayValues[cont], "rest" : null};
        } else {
            listValues = {"value" : arrayValues[cont], "rest" : listValues};
        }
        
    }
    return listValues;
}

console.log(arrayToList([10, 20, 30]));

// list to array
console.log("list to array");

function listToArray(listElements) {
    arrayElements = [];
    while (listElements != null) {
        arrayElements.push(listElements.value);
        listElements = listElements.rest;
    }
    return arrayElements;
}

console.log(listToArray(arrayToList([10, 20, 30])));

// prepend
console.log("Prepend");
function prepend(element, list) {
    return {"value" : element, "rest" : list};
}

console.log(prepend(10, prepend(20, null)));

//nth
console.log("nth");

function nth(list, searchElementIndex) {
    console.log(listToArray(list));
    return listToArray(list)[searchElementIndex];
}

console.log(nth(arrayToList([10, 20, 30]), 1));

// deep equal
console.log("deep equal");

function deepEqual(val1, val2) {
    let result = false;

    if (val1 === null && val2 === null || val1 === undefined && val2 === undefined) {
        // validate null object and values
        result = true;
    } else if(val1 !== null && val2 !== null && typeof(val1) !== "object" && typeof(val2) !== "object" && val1 === val2) {
        // validate number, string, boolean
        result = true;
    } else if (val1 !== null && val2 !== null && typeof(val1) === "object" && typeof(val2) === "object") {
        // validate object
        if (Object.keys(val1).length === Object.keys(val2).length) {
            // validate num of keys
            for (let i = 0; i < Object.keys(val1).length; i++) {
                // validate key names
                if(Object.keys(val1)[i] !== Object.keys(val2)[i]) {
                    result = false;
                    break;
                } else {
                    result = true;
                }
            }
            for (let key in val1) {
                // compare data in object
                if (!deepEqual(val1[key], val2[key])) {
                    result = false;
                    break;
                } else {
                    result = true;
                }
            }
        }
    }

    return result;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));