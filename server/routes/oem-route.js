const { Router } = require("express");
const { oemModal } = require("../models/oemModal");

const oemRoute = Router();

oemRoute.get("/", async (req, res) => {
  try {
    const data = await oemModal.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

oemRoute.post("/post", async (req, res) => {
  const data = req.body;

  try {
    const CarSpecs = new oemModal(data);
    await CarSpecs.save();
    res.status(200).send({ msg: "cars specs added", CarSpecs });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

oemRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const individual_oem_cars_Spec = await oemModal.findOne({ _id: id });
    res.status(200).send(individual_oem_cars_Spec);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { oemRoute };
