import { request, response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/usersModels.js';

const formularioLogin = (req = request, res = response) => {
    res.render('login', { title: 'Ingreso de usuarios' });
}

const formularioRegistro = (req = request, res = response) => {
    res.render('register', { title: 'Creación de usuarios' });
}

const loginUsuario = (req = request, res = response) => {

    console.log(req.body);
    
}

const registrarUsuario = async (req = request, res = response) => {
    
    console.log(req.body);

    const error = validationResult(req);

    console.log(error);

    if(!error.isEmpty()){

        res.render('register', {
            title: 'Creación de usuarios',
            errors: error.mapped(),
            old: req.body
        });

    }else{

        res.redirect('/users/login');

        const { username, password, email, provincia } = req.body;

        console.log(username, password, email, provincia);

        const user = new User({ username, password, email, provincia });
        try{
            await user.save();
        }catch(err){
            console.log(err);
        }

    }
}

export { formularioLogin, formularioRegistro, loginUsuario, registrarUsuario };