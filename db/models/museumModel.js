const mongoose = require("../../connection");

const ExhibitModel = new mongoose.Schema({
  exhibitName: String,
  description: String
});
const ReviewModel = new mongoose.Schema({
  stars: Number,
  comment: String
});

const MuseumModel = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number
  },
  metroAccessible: Boolean,
  website: String,
  freeAdmission: Boolean,
  review: [ReviewModel],
  exhibit: [ExhibitModel]
});

module.exports = mongoose.model("Museums", MuseumModel);
