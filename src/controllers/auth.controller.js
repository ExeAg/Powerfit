import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password, fullname, age, dni, role } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email already in use"]);
    //Encriptando password
    const passwordHash = await bcrypt.hash(password, 10); //encriptando password

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      fullname,
      age,
      dni,
      role,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });   /// tambien podemos pasar roles
    res.cookie("token", token);  /// probar con localstorage , pc alejo
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      fullname: userSaved.fullname,
      role: userSaved.role,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json([/*message: */ error.message]);
  }
};

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password); //encriptando password
    if (!isMatch)
      return res.status(400).json({ message: "Credenciales invalidas" });

    const token = await createAccessToken({ id: userFound._id });
    res.cookie(
      "token",
      token /*, {
      sameSite: 'none',
      secure: true,
      httpOnly: false
    }*/
    );
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      fullname: userFound.fullname,
      role: userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    role: userFound.role,
    fullname: userFound.fullname,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role,
    });
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Consulta a la base de datos para obtener todos los usuarios
    res.status(200).json(users); // Responde con la lista de usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "user not found" });
  res.json(user);
};