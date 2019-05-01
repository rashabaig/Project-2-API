const mongoose = require('../../connection')
const ReviewModel = new mongoose.Schema({
    review: [{
        stars: Number,
        comment: String
    }]
})

module.exports = mongoose.model("Reviews", ReviewModel )