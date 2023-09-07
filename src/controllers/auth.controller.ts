import { Request, Response } from 'express';
//import User from '../models/user.model';

export const register = (req: Request, res: Response): void => {
    const { username, email, password, nombreyapellido, edad, DNI } = req.body;
    console.log(username, email, password, nombreyapellido, edad, DNI );
    res.send('registrando');
};

export const login = (req: Request, res: Response) => res.send('login');