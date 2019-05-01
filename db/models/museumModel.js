const mongoose = require('../../connection')
const ReviewModel = require('./reviewModel')
const ExhibitModel = require('./exhibitModel')
const MuseumModel = new mongoose.Schema({
    name: String,
    address: {
      street: String,
      state: String,
      zipcode: Number
    },
    metroAccessible: Boolean,
    website: String,
    freeAdmission: Boolean,
    review: [ReviewModel], 
    exhibit: [ ExhibitModel]
})

module.exports = mongoose.model("Museums", MuseumModel )