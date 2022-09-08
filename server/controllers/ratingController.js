const { Rating } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');

class RatingController{
    async addRating(req, res) {
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
        return res.json(rating);
    }

    async getOneDevice(req, res, next) {
        console.log(req.body)
        let rez = {rating: 0, count: 0}
        const { deviceId } = req.body;
        if (!deviceId)
        {
            return next(ApiError.internal('Укажите id устройства!'))
        }
        const rating = await Rating.findAll({ where: { deviceId } });
        rating.forEach((e) => {
            rez.rating = rez.rating + e.rate;
            rez.count++;
         })
         if(rez.count != 0)
         rez.rating = rez.rating / rez.count
        return res.json(rez);
    }
}

module.exports = new RatingController();