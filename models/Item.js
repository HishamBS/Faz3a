const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true
    },
    item_category: {
      type: String,
      enum: [
        "kitchen",
        "health_care",
        "home_tools",
        "furniture",
        "car_tools",
        "sports",
        "beauty",
        "others"
      ],
      required: true
    },
    item_description: {
      type: String,
      required: true
    },
    belongs_to_user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
    requested_by_user:[{
        type: Schema.Types.ObjectId,
        ref: "User",
      }],
    item_status: {
      type: String,
      enum: [
        "available",
        "unavailable"
      ],
      required: true
    }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
