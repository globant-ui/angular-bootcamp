console.log("\nExercise 1");


for (let i='#' ; i.length < 8; i+='#' ){
    console.log(i); 
}

console.log("\nExercise 2");

for (var i=1; i< 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
     else if (i % 3 == 0) console.log("Fizz");
     else if (i % 5 == 0) console.log("Buzz");
     else console.log(i);
    
}

console.log("\nExercise 3");

var size = 18;
let line=" ";
for (var i=0; i<size; i++){
    for(j=0; j<size; j++){
        if (i%2 == 0)
            if (j%2 == 0 )  line+="#";
            else line+=" ";
        else
        if (j%2 == 0 )  line+=" ";
        else line+="#";
    }
    console.log(line);
    line=" ";   
}





