/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyAdministrador, articuloController.add);
router.get('/list', articuloController.list);
router.put('/update', auth.verifyAdministrador, articuloController.update);
router.put('/activate', auth.verifyAdministrador, articuloController.activate);
router.put('/deactivate', auth.verifyAdministrador, articuloController.deactivate);

module.exports = router;