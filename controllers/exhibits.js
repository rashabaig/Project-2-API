// const express = require('express')
// const router = express.Router()
// const ExhibitModel = require('../db/models/exhibitModel')

// router.get('/', (req,res)=> {
//     ExhibitModel.find({}).then(allexhibits => {
//         console.log(allexhibits)
//         res.json(allexhibits)
//     })
// })

// router.post('/new',(req,res) => {
//     let newExhibit = req.body
//     ExhibitModel.create(newExhibit).then(created => {
//         res.json(created)
//     })
// })

// router.put('/update/:id',(req,res) => {
//     ExhibitModel.findOneAndUpdate({_id: req.params.id}, req.body).then(updatedExhibit => {
//         res.json(updatedExhibit)
//     })
// })

// router.delete('/:id', (req,res) => {
//     ExhibitModel.deleteOne({_id: req.params.id})
//     .then(deleted => {
//         res.json(deleted)
//     })
// })

// module.exports = router