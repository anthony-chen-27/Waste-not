const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true
  },
  date: {
      type: Date,
      default: Date.now,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant"
  }
});

module.exports = FoodItem = mongoose.model("FoodItem", FoodItemSchema);
