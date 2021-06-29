const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const FoodItem = require("../../models/FoodItem");

router.post("/", (req, res) => {
  const newFoodItem = new FoodItem({
    name: req.body.name,
    description: req.body.description,
    servings: req.body.servings,
  });
  Restaurant.findById(req.body.restaurantId).then((restaurant) => {
    restaurant.foodItems
      ? restaurant.foodItems.push(newFoodItem._id)
      : (restaurant.foodItems = [newFoodItem._id]);
    restaurant.save();
  });
  newFoodItem.save().then((foodItem) => res.json(foodItem));
});

module.exports = router;
