const express = require("express");
const router = express.Router();
const MuseumModel = require("../db/models/museumModel");

router.get("/home", function(req, res) {
  MuseumModel.find({}).then(allMuseums => {
    res.render("index", { museums: allMuseums });
  });
});

//The above function

router.get("/", (req, res) => {
  MuseumModel.find({}).then(allmuseums => {
    res.json(allmuseums);
  });
});

//The above get request works to show all museums
router.get("/:name", (req, res) => {
  let museumName = req.params.name;
  MuseumModel.findOne({ name: museumName }).then(museum => {
    res.json(museum);
  });
});

router.post("/", (req, res) => {
  let newMuseum = req.body;
  MuseumModel.create(newMuseum).then(newMuseum => {
    res.json(newMuseum);
    newMuseum.save();
  });
});
//The above post request works to create a new museum

router.put("/newExhibit/:museumID", (req, res) => {
  MuseumModel.update(
    { _id: req.params.museumID },
    { $push: { exhibit: req.body } }
  ).then(updatedMuseum => {
    res.json(updatedMuseum);
  });
});
// The above put request works to create a new exhibit for a given museum, since museums are always hosting new exhibits.

router.put("/newReview/:museumID", (req, res) => {
  MuseumModel.update(
    { _id: req.params.museumID },
    { $push: { review: req.body } }
  ).then(updatedMuseum => {
    res.json(updatedMuseum);
  });
});

//The above put request works to create a new review for a given museum, by museum ID.

router.delete("/:id", (req, res) => {
  MuseumModel.deleteOne({ _id: req.params.id }).then(deleted => {
    res.json(deleted);
  });
});
//The above delete request works to delete an entire museum record by ID.
router.put("/removeExhibit/:museumID/:exhibitID", (req, res) => {
  MuseumModel.update(
    { _id: req.params.museumID },
    { $pull: { exhibit: { _id: req.params.exhibitID } } }
  ).then(updatedExhibit => {
    res.json(updatedExhibit);
  });
});
//The above put request can be used to delete a given exhibit (since some exhibits are temporary) from the exhibits array of a given museum.

router.delete("/removeReview/:museumID/:reviewID", (req, res) => {
  MuseumModel.update(
    { _id: req.params.museumID },
    { $pull: { review: { _id: req.params.reviewID } } }
  ).then(updatedReview => {
    res.json(updatedReview);
  });
});

//The above put request can be used to remove a given review from the reviews array of a given museum.
module.exports = router;
