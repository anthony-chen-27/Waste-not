const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  foodItems: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }],
  location: {
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
  },
  date: {
      type: Date,
      default: Date.now,
  },
  category: {
      type: String
  },
  dietaryRestrictions: {
      type: String
  },
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);
