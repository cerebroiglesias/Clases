import express from 'express';
const router = express.Router();

import { 
    mostrarFormulario,
    cargarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto,
    eliminarProducto,
    mostrarActualizarProducto,
    actualizarProducto
} from '../controllers/mongooseController.js';

router.get('/', mostrarFormulario);
router.post('/', cargarFormulario);
router.get('/list', listarProductosTabla);
router.get('/list-cards', listarProductosCards);
router.get('/descripcion/:id', mostrarDescripcionProducto);
router.get('/eliminar/:id', eliminarProducto);
router.get('/actualizar/:id', mostrarActualizarProducto);
router.post('/actualizar/:id', actualizarProducto);

export default router;