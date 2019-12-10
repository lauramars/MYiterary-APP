const express = require('express');
// const MongoClient = require('mongodb').MongoClient
// var ObjectID = require('mongodb').ObjectID; // we will use this later
const bodyParser= require('body-parser')
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const db = require('./keys').mongoURI;

const mongoose = require ("mongoose");

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
   .then(()=> console.log('Connection to Mongo DB estabilished'))
   .catch(err => console.log(err));
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'))
    


// MongoClient.connect('mongodb+srv://lauramars85:MYtinerary@mytinerary-qtdlq.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
//       // ... start the server
//       var dbase = db.db("crud");
//       if (err) return console.log(err)
//       app.listen(3000, () => {
//         console.log('app working on 3000')
//       })
//     })