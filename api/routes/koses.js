import express from "express";
import Kos from "../models/Kos.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const newKos = new Kos(req.body);
  try {
    const savedKos = await newKos.save();
    res.status(200).json(savedKos);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedKos = await Kos.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedKos);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Kos.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: `Successfully deleted the kos with id ${req.params.id}`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getKos = await Kos.findById(req.params.id);
    res.status(200).send(getKos);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const getAllKos = await Kos.find();
    res.status(200).send(getAllKos);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
