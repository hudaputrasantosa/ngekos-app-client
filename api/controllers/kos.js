import Kos from "../models/Kos.js";

export const createKos = async (req, res) => {
  const newKos = new Kos(req.body);
  try {
    const savedKos = await newKos.save();
    res.status(200).json(savedKos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateKos = async (req, res) => {
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
};

export const deleteKos = async (req, res) => {
  try {
    await Kos.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: `Successfully deleted the kos with id ${req.params.id}`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getKos = async (req, res) => {
  try {
    const getKosById = await Kos.findById(req.params.id);
    res.status(200).send(getKosById);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllKos = async (req, res) => {
  try {
    const getKoses = await Kos.find();
    res.status(200).send(getKoses);
  } catch (error) {
    res.status(500).json(error);
  }
};
