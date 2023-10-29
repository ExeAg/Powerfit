import Comp from "../models/comp.model.js"

export const getComps = async (req, res) => {
    const comps = await Comp.find({
        user: req.user.id
    });
    res.json(comps);
};

export const createComp = async (req, res) => {
    const { altura, peso, grasa, agua, viceral, musculo, proteinas, basal, hueso } = req.body;
    
    console.log(req.user);
    const newComp = new Comp({
        altura,
        peso,
        grasa,
        agua,
        viceral,
        musculo,
        proteinas,
        basal,
        hueso,
        user: req.user.id,
    });
    const savedComp = await newComp.save();
    console.log(savedComp);
    res.json(savedComp);
};

export const getComp = async (req, res) => {
    const comp = await Comp.findById(req.params.id);
    if (!comp) return res.status(404).json({ message: "Comp not found" });
    res.json(comp);
};

export const deleteComp = async (req, res) => {
    const comp = await Comp.findByIdAndDelete(req.params.id);
    if (!comp) return res.status(404).json({ message: "Comp not found" });
    return res.status.sendStatus(204);
};

export const updateComp = async (req, res) => {
    const comp = await Comp.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!comp) return res.status(404).json({ message: "Comp not found" });
    res.json(comp);
};