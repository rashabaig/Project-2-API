// const express = require('express')
// const router = express.Router()
// const ReviewModel = require('../db/models/reviewModel')

// router.get('/', (req,res)=> {
//     ReviewModel.find({}).then(allreviews => {
//         console.log(allreviews)
//         res.json(allreviews)
//     })
// })

// router.post('/new',(req,res) => {
//     let newReview = req.body
//     ReviewModel.create(newReview).then(created => {
//         res.json(created)
//     })
// })

// router.put('/update/:id',(req,res) => {
//     ReviewModel.findOneAndUpdate({_id: req.params.id}, req.body).then(updatedReview => {
//         res.json(updatedReview)
//     })
// })

// router.delete('/:id', (req,res) => {
//     ReviewModel.deleteOne({_id: req.params.id})
//     .then(deleted => {
//         res.json(deleted)
//     })
// })

// module.exports = router