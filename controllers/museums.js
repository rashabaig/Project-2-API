const express = require('express')
const router = express.Router()
const MuseumModel = require('../db/models/museumModel')

router.get('/', (req,res)=> {
    MuseumModel.find({}).then(allmuseums => {
        console.log(allmuseums)
        res.json(allmuseums)
    })
})

router.post('/',(req,res) => {
    let newMuseum = req.body
    MuseumModel.create(newMuseum).then(created => {
        res.json(created)
    })
})

router.put('/:id',(req,res) => {
    MuseumModel.findOneAndUpdate({_id: req.params.id}, req.body).then(updatedMuseum => {
        res.json(updatedMuseum)
    })
})

router.delete('/:id', (req,res) => {
    MuseumModel.deleteOne({_id: req.params.id})
    .then(deleted => {
        res.json(deleted)
    })
})


module.exports = router