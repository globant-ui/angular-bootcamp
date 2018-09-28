// Exercise "Looping a Triangle"

function loopingTriangle() {
    for (let hashtag = "#"; hashtag.length <= 7; hashtag += "#") {
        console.log(hashtag);
    }
}

// Exercise "FizzBuzz"

function fizzBuzz() {
    for (let counter = 1; counter <= 100; counter++) {
        if (counter % 3 == 0 && counter % 5 == 0){
            console.log("FizzBuzz");
        } else {
            if (counter % 3 == 0) {
                console.log("Fizz");
            } else {
                if (counter % 5 == 0) {
                    console.log("Buzz");
                } else {
                    console.log(counter);
                }
            }
        }
    }
}

// Exercise "Chessboard"

function chessboard() {
    const size = 8;
    for (let x = 0; x < size; x++) {
        let output = "";
        for (let y = 0; y < size; y++) {
            if ((x + y) % 2 == 0) {
                output += " ";
            } else {
                output += "#";
            }
        }
        console.log(output + "\n");
    }
}