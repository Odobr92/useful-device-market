const { BasketDevice, Basket, Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class basketController {
  async addDevice(req, res, next) {
    const { deviceId } = req.body;
    if (!deviceId)
      return next(ApiError.badRequest('Нет данных об устройстве!'));
    const { id } = req.user;
    const basketUser = await Basket.findOne({ where: { userId: id } });
    const basketDevice = await BasketDevice.create({
      deviceId,
      basketId: basketUser.id,
    });
    return res.json(basketDevice);
  }

  async getAllDevice(req, res) {
    const { id } = req.user;
    const basketUser = await Basket.findOne({ where: { userId: id } });
    const basketDevice = await BasketDevice.findAndCountAll({
      where: { basketId: basketUser.id }, include: [{model: Device, as: 'device', required: true}]
    });
    return res.json(basketDevice);
  }
  
  async getOneBasketDevice(req, res, next) {
    const { id: deviceId } = req.params;
    const { id } = req.user;
    const basketUser = await Basket.findOne({ where: { userId: id } });

    const basketOneDevice = await BasketDevice.findOne({
      where: { basketId: basketUser.id, deviceId}, include: [{model: Device, as: 'device', required: true}]
    });
    if (!basketOneDevice)
      return res.json(false);
    else
      return res.json(basketOneDevice);
  }

  async removeDevice(req, res, next) {
    const { deviceId } = req.body;
    if (!deviceId)
      return next(ApiError.badRequest('Нет данных об устройстве!'));
    const { id } = req.user;
    const basketUser = await Basket.findOne({ where: { userId: id } });
    let basketDevice = await BasketDevice.findOne({
      where: { basketId: basketUser.id, deviceId },
    });
    if (basketDevice)
      basketDevice = await BasketDevice.destroy({
        where: { basketId: basketUser.id, deviceId },
      });
    return res.json(basketDevice);
  }

  async setAmountDevice(req, res, next) {
    const { deviceId, amount } = req.body;
    if (!deviceId)
      return next(ApiError.badRequest('Нет данных об устройстве!'));
    const { id } = req.user;
    const basketUser = await Basket.findOne({ where: { userId: id } });
    let basketDevice = await BasketDevice.findOne({
      where: { basketId: basketUser.id, deviceId },
    });
    if (basketDevice){
      basketDevice.amount = amount;
      await basketDevice.save();
    }
    return res.json(basketDevice);
  }

}

module.exports = new basketController();
