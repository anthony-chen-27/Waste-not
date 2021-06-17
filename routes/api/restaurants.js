const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Restaurant = require("../../models/Restaurant");
//Restaurant Validation will go here

router.get("/", (req, res) => {
  Restaurant.find()
    // .sort({ date: -1 })
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(404).json({ norestaurantsfound: "No restaurants found" }));
});

router.get("/:name", (req, res) => {
  Restaurant.find({ name: req.params.name })
    .then((restaurant) => res.json(restaurant))
    .catch((err) =>
      res.status(404).json({ norestaurantsfound: "No restaurant found with that name" })
    );
});

// router.get("/owned", (req, res) => {
//   Restaurant.find({ owner:  })
//     // .sort({ date: -1 })
//     .then((restaurants) => res.json(restaurants))
//     .catch((err) => res.status(404).json({ norestaurantsfound: "No restaurants found" }));
// });

router.post(
  "/",
  (req, res) => {
    // const { errors, isValid } = validateRestaurantInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const newRestaurant = new Restaurant({
      name: req.body.name,
      // owner: req.user.id,
      description: req.body.description,
      location: req.body.location,
      category: req.body.category
    });

    newRestaurant.save().then((restaurant) => res.json(restaurant));
  }
);

module.exports = router;