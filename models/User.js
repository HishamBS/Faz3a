const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    score: {
      type: Number,
      default: 0
    },
    provided_items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item"
      }
    ],
    requested_items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item"
      }
    ],
    coordinates: {
      lat: {
        type: String,
        default: "21.436099841056247"
      },
      long: {
        type: String,
        default: "39.84654660000001"
      }
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
