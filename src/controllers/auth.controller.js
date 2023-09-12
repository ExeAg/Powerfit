import { Request, Response } from 'express';
const { username, email, password, nombreyapellido, edad, DNI } = req.body;
//import User from '../models/user.model';

export const register = async(req, res) => {
    try{
    const newUser = new User({ 
        username, email, password, nombreyapellido, edad, DNI 
    });

    await newUser.save();
    res.send("registrando");
}   catch (error){
    console.log(error)
}
    };

export const login = (req, res) => res.send('login');