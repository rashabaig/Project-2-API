const express = require('express')
const router = express.Router()
const MuseumModel = require('../db/models/museumModel')

router.get('/', (req,res)=> {
    MuseumModel.find({}).then(allmuseums => {
        console.log(allmuseums)
        res.json(allmuseums)
    })
})
//The above get request works to show all museums
router.get("/:name", (req,res) => {
    let museumName = req.params.name
    MuseumModel.findOne({name: museumName}).then(museum => {
        res.json(museum)
    })
})
//The above get request works to get a specific museum, by name

router.post('/',(req,res) => {
    let newMuseum = req.body
    MuseumModel.create(newMuseum).then(newMuseum => {
        res.json(newMuseum)
        newMuseum.save()
    })
})
//The above post request works to create a new museum

router.put('/newExhibit/:id',(req,res) => {
    MuseumModel.update({_id: req.params.id}, {$push: {exhibit: req.body}}).then(updatedMuseum => {
        res.json(updatedMuseum)
    })
})
// The above put request works to add an exhibit at a given museum

router.put('/newReview/:id',(req,res) => {
    MuseumModel.update({_id: req.params.id}, {$push: {review: req.body}}).then(updatedMuseum => {
        res.json(updatedMuseum)
    })
})

//The above put request works to add a review to a given museum

router.delete('/:id', (req,res) => {
    MuseumModel.deleteOne({_id: req.params.id})
    .then(deleted => {
        res.json(deleted)
    })
})
//The above delete request works to delete an entire museum record


module.exports = router