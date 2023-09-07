"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
//import User from '../models/user.model';
const register = (req, res) => {
    const { username, email, password, nombreyapellido, edad, DNI } = req.body;
    console.log(username, email, password, nombreyapellido, edad, DNI);
    res.send('registrando');
};
exports.register = register;
const login = (req, res) => res.send('login');
exports.login = login;
