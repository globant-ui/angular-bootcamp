const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send('Hello There!');
})

app.post('/', (req, res) => {
    res.render(__dirname + '/hello.html', { name: req.body.user.name, email: req.body.user.email });
})

app.get('/json', (req, res) => {
    var obj = JSON.parse(fs.readFileSync('demo.json', 'utf8'));
    var string = JSON.stringify(obj);

    var string_spaced = string.replace(/[^\w\s]/gi, ' ');
   
   // console.log(string_spaced);

    console.log(obj.menu.id);
    console.log(obj.menu.price);
    console.log(obj.menu.week);
    
    res.render(__dirname + '/json.html', { menu : obj.menu, keys : Object.keys(obj.menu.week) });

})

app.get('/random', (req, res) => {
    res.send(`The magic number is: ${Math.floor((Math.random() * 101))}`);
})

app.get('/web', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/hello.html');
})


app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
})

// #ToDo: Fix routes from href to node.
// First things first, this won't work. It's your job to fix it
// Just a clue, that variable called express is a module, so you need to bring it in.
// If only there was some kind of MANAGER for that ;) (make sure you save it though)

// Once the server is working, add a new route, called "/random" that
// sends out a random number between 0 and 100 as a response.

// ******BONUS POINTS*******
// Add 2 other routes, one that does whatever you want, and another one
// that load up a JSON file from the server (if you don't know what that is, Google it)
// and sends the content as a string (little tip, theres a Js method for that)
