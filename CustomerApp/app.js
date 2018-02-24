const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
// const logger = function(req, res, next){
//     console.log('logging...');
//     next();
// }
// app.use(logger);

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// API
var peoples = [
    {
        name: 'Rahul',
        age: 25
    },
    {
        name: 'Shukla',
        age: 25
    }
]

// Route
app.get('/', function(req, res){
    //res.send(people); //pass array
    //res.send('Hello');
    res.render('index',{
        title: 'Customer App',
        peoples: peoples
    });
});

app.post('/peoples/add', function(req, res){
    const newPeople = {
        fname: req.body.fname,
        age: req.body.age
    }
    console.log(newPeople);
});

app.listen(3000, function() {
    console.log("server started on port 3000..");
});