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
      populate: { path: "user2", select: "nickname" }
    })
    .then(user => {
      user
        ? res.status(200).json({ chats: user.chats })
        : res.status(404).json("user not found");
    })
    .catch(err => res.status(400).send(err));
});

//post a new chat
router.post("/:sender_id/rec/:receiver_id", async (req, res) => {
  // {
  //     user: userid
  //     message : 'hhd'
  // }
  let otherUser = req.params.receiver_id;
  let cur_User = req.params.sender_id;
  let group = await Group.find({ user1: cur_User, user2: otherUser });
  console.log("groups:", group);
  console.log("group_length:", group.length);

  if (group.length < 1) {
    let new_group = new Group({ user1: cur_User, user2: otherUser });
    let comp = await new_group.save();
    console.log(new_group);
    console.log(comp);

    let cur_user_info = await User.findByIdAndUpdate(cur_User, {
      $push: { chats: new_group._id }
    });
    let cur_user_info2 = await User.findByIdAndUpdate(req.params.receiver_id, {
      $push: { chats: new_group._id }
    });

    res.send({ comp, cur_user_info, cur_user_info2 });
  } else {
    console.log("got here");
    let updagroup = await Group.findByIdAndUpdate(req.body.group_id, {
      $push: {
        messages: { sender: req.body.sender, message_body: req.body.message }
      }
    });
    console.log(updagroup);
    res.send(updagroup);
    // sender = user_id
    // group.message = ''
    // group
  }
  //   let newGroup = req.body;
});

module.exports = router;
