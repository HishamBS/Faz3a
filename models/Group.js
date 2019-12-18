const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    messages: [
      {
        sender: {
          type: Schema.Types.ObjectId,
          ref: "User"
        },
        message_body: {
          type: String,
          default: ""
        },
        time: {
          type: Date,
          default: Date.now
        }
      }
    ],
    user1: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    user2: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
