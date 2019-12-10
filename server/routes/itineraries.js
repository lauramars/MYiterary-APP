const express = require('express')

const router = express.Router()

const itineraryModel = require ('../model/itineraryModel')

router.get('/:name',
	(req, res) => {
          let cityRequested = req.params.name;
          console.log(cityRequested)
  		itineraryModel.find({ city: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});

// router.get('/', (req,res) =>{
//     itineraryModel.find()
//     .then(docs => res.send(docs))
// })


module.exports = router