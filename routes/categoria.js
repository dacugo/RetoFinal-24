/* import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyAdministrador, categoriaController.add);
router.get('/list', auth.verifyUsuario, categoriaController.list);
router.put('/update', auth.verifyAdministrador, categoriaController.update);
router.put('/activate', auth.verifyAdministrador, categoriaController.activate);
router.put('/deactivate', auth.verifyAdministrador, categoriaController.deactivate);


module.exports = router;