const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello There!');
})

app.get('/ramdom', (req, res) => {
    res.send(`Random number: ${parseInt(Math.random() * 10)}`)
})

// app.get('/bonus', (req, res) => {
//     res.send(`Bonus ok`)
// })

app.get('/json', (req, res) => {
    fs.readFile(__dirnaame + '/package.json', function (err, data) {
        if (err) throw err;
        res.send(data.toString());
    })
})

app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
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
