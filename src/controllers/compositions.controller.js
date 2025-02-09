import Composition from "../models/composition.model.js";


export const getCompositions = async (req, res) => {
  try {
    const composition = await Composition.find({
      user: req.user.id,
    }).populate("user");
    res.json(composition);
  } catch (error) {
    return res.status(500).json({ message: "Ups... Algo salio mal" });
  }
};

export const createComposition = async (req, res) => {
  try {
    const { title, name, fullname, peso, grasa, description, date } = req.body;

    const newComposition = new Composition({
      title,
      name,
      fullname,
      peso,
      grasa,
      description,
      date,
      user: req.user.id,
    });
    const savedComposition = await newComposition.save();
    res.json(savedComposition);
  } catch (error) {
    return res.status(500).json({ message: "Ups... Algo salio mal" });
  }
};

export const getComposition = async (req, res) => {
  try {
    const composition = await Composition.findById(req.params.id).populate("user");
    if (!composition) return res.status(404).json({ message: "No se encontró composición" });
    res.json(composition);
  } catch (error) {
    return res.status(404).json({ message: "Composition not found" });
  }
};

export const deleteComposition = async (req, res) => {
  try {
    const composition = await Composition.findByIdAndDelete(req.params.id);
    if (!composition) return res.status(404).json({ message: "No se encontró Composición corporal" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Composition not found" });
  }
};

export const updateComposition = async (req, res) => {
  try {
    const composition = await Composition.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //para que mongoose nos devuelva el dato nuevo y no el viejo
    });
    if (!composition) return res.status(404).json({ message: "No se encontró Composición corporal" });
    res.json(composition);
  } catch (error) {
    return res.status(404).json({ message: "Composition not found" });
  }
};