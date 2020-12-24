/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyAdministrador, usuarioController.add);
router.get('/list', auth.verifyUsuario, usuarioController.list);
router.put('/update', auth.verifyAdministrador, usuarioController.update);
router.put('/activate', auth.verifyAdministrador, usuarioController.activate);
router.put('/deactivate', auth.verifyAdministrador, usuarioController.deactivate);
router.post('/login', usuarioController.login);

module.exports = router;