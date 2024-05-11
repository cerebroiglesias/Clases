import express from 'express';
import { check } from 'express-validator';
var router = express.Router();
import { formularioLogin, formularioRegistro, loginUsuario, registrarUsuario } from '../controllers/usersController.js';

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', formularioLogin);
});

router.post('/login', function(req, res, next) {
  res.render('login', loginUsuario);
});

router.get('/register', function(req, res, next) {
  res.render('register', formularioRegistro);
});

router.post('/register', function(req, res, next) {
  check('username', 'El nombre de usuario es obligatorio').notEmpty().isLength({ min: 5 }).withMessage('El nombre de usuario debe tener al menos 5 caracteres'),
  check('password', 'La contraseña es obligatoria').notEmpty().isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
  check('email', 'El correo es obligatorio').notEmpty().isEmail().withMessage('El correo no es valido'),
  check('provincia', 'La provincia es obligatoria').notEmpty().isLength({ min: 5 }).withMessage('La provincia debe tener al menos 5 caracteres'),
  res.render('register', registrarUsuario);
});



export default router;
