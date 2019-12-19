const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Item = require("../models/Item");

//get specific item page
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(404).json({ msg: "mall doesn't exist", err: err });
    });
});
//get all items in the db
router.get("/", async (req, res) => {
  try {
    let allItems = await Item.find();
    res.status(200).json(allItems);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//get all provided items for a user
router.get("/:user_id/provided", async (req, res) => {
  try {
    let selectedUserProvided = await User.findById(req.params.user_id).populate(
      {
        path: "provided_items",
        populate: { path: "requested_by_user", select: "nickname" }
      }
    );
    res.status(200).json(selectedUserProvided.provided_items);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//get all requested items for a user
router.get("/:user_id/requested", async (req, res) => {
  try {
    let selectedUserRequested = await User.findById(
      req.params.user_id
    ).populate({
      path: "requested_items",
      populate: { path: "belongs_to_user", select: "nickname" }
    });

    res.status(200).json(selectedUserRequested.requested_items);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//add an item to the provided array
router.post("/:user_id/provided", async (req, res) => {
  User.findById(req.params.user_id).then(user => {
    let provided_item = new Item(req.body);
    user.provided_items.push(provided_item._id);
    provided_item.save();
    user.save().then(check => {
      res.status(200).send({ msg: "added successfully", item: provided_item });
    });
  });
});
//edit an item in the provided array
router.put("/:user_id/provided/:item_id", async (req, res) => {
  let updated_provided_item = req.body;
  User.findById(req.params.user_id)
    .then(user => {
      Item.findByIdAndUpdate(req.params.item_id, updated_provided_item)
        .then(item => {
          res.status(200).json({ msg: "edited successfully", item: item });
        })
        .catch(err => {
          res.status(400).json({ msg: "something went wrong", err: err });
        });
    })
    .catch(err => {
      res.status(404).json({ msg: "User doesnt exist", err: err });
    });
});

//delete an item from the provided array
router.delete("/:user_id/provided/:item_id", (req, res) => {
  Item.findById(req.params.item_id)
    .then(item => {
      item.remove();
      User.findById(req.params.user_id).then(user => {
        user.provided_items.pull({ _id: req.params.item_id });
        user.save();
        res.status(200).json({ msg: "deleted successfully", item: item });
      });
    })
    .catch(err => {
      res.status(400).json({ msg: "item not found", err: err });
    });
});

//requesting an item from a user
router.put("/request/:requester_id/:provided_item_id/", (req, res) => {
  User.findById(req.params.requester_id)
    .then(requester => {
      requester.requested_items.push(req.params.provided_item_id);
      requester.save();
      Item.findById(req.params.provided_item_id).then(item => {
        item.item_status = "unavailable";
        item.requested_by_user.push(req.params.requester_id);
        item.save();
        res
          .status(200)
          .json({ msg: "item successfully requested", item: item });
      });
    })
    .catch(err => {
      res.status(400).json({ msg: "item not found", err: err });
    });
});

//return a requested items to the original owner
router.put("/return/:requester_id/:provided_item_id/", (req, res) => {
  User.findById(req.params.requester_id)
    .then(requester => {
      requester.requested_items.pull({ _id: req.params.provided_item_id });
      requester.save();
      Item.findById(req.params.provided_item_id).then(item => {
        item.item_status = "available";
        item.requested_by_user.pull({ _id: req.params.requester_id });
        item.save();
        res.status(200).json({ msg: "item successfully returned", item: item });
      });
    })
    .catch(err => {
      res.status(400).json({ msg: "item not found", err: err });
    });
});
module.exports = router;
