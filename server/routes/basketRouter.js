const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, basketController.addDevice);
router.post('/remove', authMiddleware, basketController.removeDevice);
router.post('/amount', authMiddleware, basketController.setAmountDevice);
router.get('/', authMiddleware, basketController.getAllDevice);
router.get('/:id', authMiddleware, basketController.getOneBasketDevice);

module.exports = router;