const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const basketRoute = require('./basketRouter');
const ratingRouter = require('./ratingRoute')

router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/basket', basketRoute);
router.use('/rating', ratingRouter);

module.exports = router;