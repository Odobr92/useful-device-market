const { Rating, Device } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const sequelize = require('../db');

class RatingController{
    async addRating(req, res, next) {
        const { id } = req.user;
        const {rate, deviceId} = req.body;
        if(!rate || !deviceId){
            return next(ApiError.internal('Укажите id устройства и рейтинг!'))
        }
        let rating = await Rating.findOne({ where: { deviceId, userId: id } });
        if(rating)
        {
            rating.rate = rate
            await rating.save()
        }
        else{
            rating = await Rating.create({rate, deviceId, userId: id });
        }

        let calcRating = await Rating.findAll({ 
            attributes: [[sequelize.fn('AVG', sequelize.col('rate')), 'rate']] ,
            group: 'deviceId',
            order: ['deviceId'],
            where: {deviceId}
        });
        console.log(id)
        console.log(deviceId)
        console.log(rate)

        let device = await Device.findOne({
            where: {id: deviceId}
        });
        device.rating = Number(calcRating[0].rate);
        await device.save();

        return res.json(rating);
    }

    async getOneDevice(req, res, next) {
        let rez = {rating: 0, count: 0}
        const { deviceId } = req.body;
        if (!deviceId)
        {
            return next(ApiError.internal('Укажите id устройства!'))
        }
        const rating = await Rating.findAll({ 
            attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'count'], [sequelize.fn('AVG', sequelize.col('rate')), 'rate']] ,
            group: 'deviceId',
            order: ['deviceId'],
            where: {deviceId}
        });

        return res.json(rating);
    }
}

module.exports = new RatingController();