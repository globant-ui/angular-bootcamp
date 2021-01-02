// minimum
console.log("Minimum");
let n1 = 5;
let n2 = 22
let result = (n1, n2) => n1 < n2 ? n1 :n2;
console.log(result(n1, n2));

// even or odd
console.log("Even or odd");
function isEven(number) {
    if (number == 0) {
        console.log("::: number is even :::");
    } else if (number == 1) {
        console.log("::: number is odd :::");
    } else {
        isEven(number - 2);
    }
}

isEven(50);
isEven(75);
//isEven(-1);

// search and count
console.log("count B's");
function countBs(text) {
    let total = 0;
    
    for (let index = 0; index < text.length; index++) {
        if (text.charAt(index).toUpperCase() === 'B') {
            total++
        }
    }

    return total;
}

console.log(countBs("BBS"));

console.log("count defined char");
function countChar(text, charToFind) {
    let total = 0;
    
    for (let index = 0; index < text.length; index++) {
        if (text.charAt(index).toUpperCase() === charToFind.toUpperCase()) {
            total++
        }
    }

    return total;
}

console.log(countChar("kaKkerlak", "k"));