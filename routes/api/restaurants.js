const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Restaurant = require("../../models/Restaurant");
//Restaurant Validation will go here
const FoodItem = require("../../models/FoodItem");

router.get("/", (req, res) => {
  Restaurant.find()
    // .sort({ date: -1 })
    .populate('foodItems')
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(404).json({ norestaurantsfound: "No restaurants found" }));
});

router.post(
  "/",
  (req, res) => {
    // const { errors, isValid } = validateRestaurantInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    const newRestaurant = new Restaurant({
      name: req.body.name,
      owner: req.body.ownerId,
      description: req.body.description,
      location: req.body.location,
      category: req.body.category
    });
    // console.log('ownerId: ', req.body.ownerId)
    User.findById(req.body.ownerId).then(owner => {
      owner.restaurants ? owner.restaurants.push(newRestaurant._id) : owner.restaurants = [newRestaurant._id];
      owner.save()
    })
    newRestaurant.save().then((restaurant) => res.json(restaurant));
  }
);

router.post("/:restaurantId", (req, res) => {
  Restaurant.findById( req.params.restaurantId )
    .then(restaurant =>     
  restaurant.save(err => {
    if (err) return res.status(404).json
    const newFoodItem = new FoodItem({
        name: req.body.name,
        description: req.body.description,
        servings: req.body.servings,
        restaurant: restaurant._id
    });
    newFoodItem.save()
    restaurant.foodItems.push(newFoodItem._id)
    restaurant.save().then(restaurant => res.json(restaurant))
  }))
})

router.get("/:restaurantId", (req, res) => {
  Restaurant.findById(req.params.restaurantId)
    .populate('foodItems')
    .then((restaurant) => res.json(restaurant))
    .catch((err) =>
      res.status(404).json({ norestaurantsfound: "No restaurant found" })
    );
})

module.exports = router;