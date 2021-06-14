const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Restaurant = require("../../models/Restaurant");
//Restaurant Validation will go here

router.get("/", (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(404).json({ norestaurantsfound: "No restaurants found" }));
});

router.get("/:name", (req, res) => {
  Tweet.find({ name: req.params.name })
    .then((restaurant) => res.json(restaurant))
    .catch((err) =>
      res.status(404).json({ notweetfound: "No restaurant found with that name" })
    );
});


router.post(
  "/restaurant",
  (req, res) => {
    // const { errors, isValid } = validateRestaurantInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const newRestaurant = new Restaurant({
      name: req.body.name,
      owner: req.user.id,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });

    newRestaurant.save().then((restaurant) => res.json(restaurant));
  }
);