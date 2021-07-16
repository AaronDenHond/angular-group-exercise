const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allAnimals = [{image: '',Name: 'Harold the Lion', age: '2', species: 'lion', class: 'mammal', food: 'zebra'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});
// get for allAnimals
app.get('/allAnimals', function (request, response ) {
    response.send(allAnimals);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

//push to allAnimals
app.post('/addAnimal', function (request, response) {
    allAnimals.push(request.body);
    response.status(200).send({"message": "Data received"});
});

app.listen(PORT, function () {});
