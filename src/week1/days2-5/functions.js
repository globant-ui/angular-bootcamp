// Exercise "Minimum"

function min(value1, value2) {
    var isNumber1 = typeof value1 == "number";
    var isNumber2 = typeof value2 == "number";

    if (isNumber1 && isNumber2) {
        return (value1 < value2) ? value1 : value2;
    } else {
        console.log("Please, enter two numbers.");
    }
}

// Exercise "Recursion"

function isEven(number) {
    var isNumber = typeof number == "number";

    if (isNumber) {
        if (number >= 0) {
            if (number === 0)
                return true;
            else
                if (number === 1)
                    return false;
                else
                    return isEven(number - 2);
        } else
            return isEven(-number);
    } else {
        console.log("Please, enter a number.")
    }
}

// Exercise "Bean Counting"

function countBs(string) {
    return countChar(string, "B");
}

function countChar(string, char) {
    var isString = typeof string == "string";
    var isChar = typeof char == "string" && char.length == 1;

    if (isString) {
        if (isChar) {
            let counter = 0;
            for (let i = 0; i < string.length; i++) {
                if (string[i] === char)
                    counter++;
            }
            return counter;
        } else {
            console.log("Please, enter a char.")
        }
    } else {
        console.log("Please, enter a string.")
    }
}