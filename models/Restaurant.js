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
  location: {
    type: String,
    required: true,
  },
  date: {
      type: Date,
      default: Date.now,
  }
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);
