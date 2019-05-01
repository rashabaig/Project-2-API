const mongoose = require('../../connection')
const ExhibitModel = new mongoose.Schema({
    exhibit: [{
      name: String,
      description: String
      }]
})

module.exports = mongoose.model("Exhibits", ExhibitModel )