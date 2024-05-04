import express from 'express';
import { 
    mostrarFormulario,
    cargarFormulario
} from '../controllers/productsController.js';
var router = express.Router();

/* GET products page. */
router.get('/', mostrarFormulario);

router.post('/', cargarFormulario)

export default router;
