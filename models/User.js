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
      required: true
    },
    score: {
      type: Number,
      required: true
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
        required: true
      },
      long: {
        type: String,
        required: true
      }
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
