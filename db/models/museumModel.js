const mongoose = require('../../connection')
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
    review: [{
        stars: Number,
        comment: String
    }], 
    exhibit: [{
      name: String,
      description: String
      }]
})

module.exports = mongoose.model("Museums", MuseumModel )