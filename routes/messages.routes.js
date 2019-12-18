const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Group = require("../models/Group");

//get a group for a user
router.get("/:user_id", (req, res) => {
  User.findById(req.params.user_id)
    .populate({
      path: "chats",
      populate: { path: "user1", select: "nickname" }
    })
    .populate({
      path: "chats",
      populate: { path: "user2", select: "nickname" }
    })
    .then(user => {
      user
        ? res.status(200).json({ chats: user.chats })
        : res.status(404).json("user not found");
    })
    .catch(err => res.status(400).send(err));
});

//start a new chat between 2 users
router.post("/:sender_id/rec/:receiver_id", async (req, res) => {
  let otherUser = req.params.receiver_id;
  let cur_User = req.params.sender_id;
  let group = await Group.find({ user1: cur_User, user2: otherUser });


  if (group.length < 1) {
    let new_group = new Group({ user1: cur_User, user2: otherUser });
    let comp = await new_group.save();
    let cur_user_info = await User.findByIdAndUpdate(cur_User, {
      $push: { chats: comp._id }
    });
    let cur_user_info2 = await User.findByIdAndUpdate(req.params.receiver_id, {
      $push: { chats: comp._id }
    });
    res.json({ comp, cur_user_info, cur_user_info2 });
  }
  else{
    res.json(group);
  }
  }
);

//chats response
router.post("/response", async (req, res) => {
    let updagroup = await Group.findByIdAndUpdate(req.body.group_id, {
      $push: {
        messages: { sender: req.body.sender, message_body: req.body.message }
      }
    });
    console.log(updagroup);
    res.json(updagroup);

  }
);
module.exports = router;
