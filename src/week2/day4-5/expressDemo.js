const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello There!');
})

app.get('/random', (req, res) => {
    const max = 100;
    var number = Math.random() * max;
    res.send("The random number is " + number);
})

app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
})

// BONUS

app.get('/readJSON/:file', (req, res) => {
    var fileName = req.params.file;
    fs.readFile(__dirname + "/" + fileName, 'utf8', (err, data) => {
        if (err) 
            res.status(404).send("Sorry! I can't find " + fileName);
        else
            res.send("File content: " + JSON.stringify(data)); 
    });
})

app.get('/sendJSON/:lastname/:name', (req, res) => {

    var person = {
        "lastname": req.params.lastname,
        "name": req.params.name
    }
    
    res.json(person);
})

// First things first, this won't work. It's your job to fix it
// Just a clue, that variable called express is a module, so you need to bring it in.
// If only there was some kind of MANAGER for that ;) (make sure you save it though)

// Once the server is working, add a new route, called "/random" that
// sends out a random number between 0 and 100 as a response.

// ******BONUS POINTS*******
// Add 2 other routes, one that does whatever you want, and another one
// that load up a JSON file from the server (if you don't know what that is, Google it)
// and sends the content as a string (little tip, theres a Js method for that)
