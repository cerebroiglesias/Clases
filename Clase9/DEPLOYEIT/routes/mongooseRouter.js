import express from 'express';
const router = express.Router();

import { mostrarFormulario,
    cargarFormulario } from '../controllers/mongooseController.js';

router.get('/', mostrarFormulario);
router.post('/', cargarFormulario);

export default router;