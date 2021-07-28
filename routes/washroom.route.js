const router = require('express').Router();
const Washroom = require('../models/Washroom.model');

router.get("/", (req,res) => {
    Washroom.find()
    .then(washrooms => res.json(washrooms))
    .catch(err => res.status(400).json("Error" + err));
})

router.post('/add', (req, res, next) => {
    const name = req.body.name;
    const discription = req.body.discription;
    const coordinate = {lat: req.body.coordinate.lat, lng: req.body.coordinate.lng};
    const openTime = req.body.openTime;
    const rate = req.body.rate;
    const time=req.body.time

    const newWashroom = new Washroom({
        name,
        discription,
        coordinate,
        openTime,
        rate,
        time
    });

    newWashroom.save()
    .then(()=> res.json("New wasroom added!"))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.get('/:id', (req, res) => {
    Washroom.findById(req.params.id)
    .then(washroom => res.json(washroom))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.delete('/:id', (req, res) => {
    Washroom.findByIdAndDelete(req.params.id)
    .then(() => res.json('Washroom deleted.'))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.post('/:id', (req,res) => {
    Washroom.findById(req.params.id)
    .then(washroom => {

        washroom.name = req.body.name;
        washroom.discription = req.body.discription;
        washroom.coordinate = {lat: req.body.coordinate.lat, lng: req.body.coordinate.lng};
        openTime = req.body.openTime;
        washroom.rate = req.body.rate;
        washroom.time = req.body.time
        
        washroom.save()
        .then(()=> res.json('Washroom data is updated!'))
        .catch(err => res.status(400).json({ error: err.message }))
    })
    .catch(err => res.status(400).json({ error: err.message }))

})

module.exports = router;