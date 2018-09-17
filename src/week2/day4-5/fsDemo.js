const fs = require('fs');
var fileName = "test.txt",
    content = "Hey There!";

fs.access(__dirname + "/" + fileName, fs.constants.F_OK, (err) => {
    if (err != null) {
        fs.writeFile(__dirname + "/" + fileName, content, function (err) {
            if (err) {
                return console.log(err)
            }
    
            console.log("The file was saved!");
        });
    } else {
        console.log(`Sorry, ${fileName} already exists.`);
    }
}); 


// BONUS - WITH BUFFER

var bufferFile = Buffer.from(fileName);
var bufferContent = Buffer.from(content);

fs.access(__dirname + "/" + bufferFile, fs.constants.F_OK, (err) => {
    if (err != null) {
        fs.writeFile(__dirname + "/" + bufferFile, bufferContent, function (err) {
            if (err) {
                return console.log(err)
            }
    
            console.log("The file was saved!");
        });
    } else {
        console.log(`Sorry, ${bufferFile} already exists.`);
    }
});

// This is a node app, this code saves a file on the current path with
// the content on the variable with that name.

// Let's make more interesting, here's the API for the 'fs' module
// https://nodejs.org/api/fs.html
// Make the app check for a current file with that name, if it's there,
// log some message on the console, if not, save the file like on the example

// *****BONUS POINTS*****
// Make it with a buffer
