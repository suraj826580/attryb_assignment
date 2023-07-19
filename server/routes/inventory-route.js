const { Router } = require("express");
const { auth } = require("../middleware/auth");
const { inventoryModel } = require("../models/Inventory-model");

const invertoryRoute = Router();

invertoryRoute.post("/post", auth, async (req, res) => {
  const data = req.body;
  try {
    const inventoryData = new inventoryModel(data);
    await inventoryData.save();
    res.send({ msg: "Your Car is Publish", data });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { invertoryRoute };
