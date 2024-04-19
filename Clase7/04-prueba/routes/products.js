var express = require('express');
const { 
    mostrarFormulario,
    cargarFormulario
} = require('../controllers/productsController');
var router = express.Router();

/* GET products page. */
router.get('/', mostrarFormulario);

router.post('/', cargarFormulario)

module.exports = router;
