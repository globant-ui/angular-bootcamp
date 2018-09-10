// Exercise "The sum of a range"
function range(start, end, step = start < end ? 1 : -1) {
    var result = [];

    if (step > 0) {
        for(var i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for(var j = start; j >= end; j += step) {
            result.push(j);
        }
    }

    return result;
}

function sum(numbers) {
    var total = 0;
    for (value of numbers) {
        total += value;
    }
    return total;
}

// Exercise "Reversing an array"

function reverseArray(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) { 
    var middle = Math.floor(array.length / 2);
    for (var i = 0; i < middle; i++) {
        var rightPosition = array.length - 1 - i;
        var rightValue = array[rightPosition];
        array[rightPosition] = array[i];
        array[i] = rightValue;
    }
    return array;
}

// Exercise "A List"

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}

function listToArray(list) {
    var array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, number) {
    var position = 0;
    while (list != null) {
        if (number == position) {
            return list.value;
        } else {
            list = list.rest;
            position++;
        }
    }
}

function nthRecursive(list, number) {
    if (list != null) {
        if (number == 0) {
            return list.value;
        } else {
            return nthRecursive(list.rest, number - 1);
        }
    } 
}

// Exercise "Deep Comparison"

function deepEqual(value1, value2) {
    if (value1 === value2)
        return true;

    var object1 = typeof value1 == "object" && value1 != null;
    var object2 = typeof value2 == "object" && value2 != null;

    if (object1 && object2) {
        var keys1 = Object.keys(value1);
        var keys2 = Object.keys(value2);
        
        if (keys1.length == keys2.length) {
            for (let key of keys1) {
                if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])){
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}