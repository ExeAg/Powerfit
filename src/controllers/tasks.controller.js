import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const task = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "Ups... Algo salio mal" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Ups... Algo salio mal" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "No se encontró tarea" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "No se encontró tarea" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //para que mongoose nos devuelva el dato nuevo y no el viejo
    });
    if (!task) return res.status(404).json({ message: "No se encontró tarea" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
