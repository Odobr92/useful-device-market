const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
    async create(req, res, next) {
        try{  
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            
            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            
            if(info){
                const infoJSON = JSON.parse(info); 
                infoJSON.forEach(e =>
                    DeviceInfo.create({
                        title: e.title,
                        description: e.description,
                        deviceId: device.id
                    })
                );
            }
            return res.json(device);
        }
        catch (e){
            next(ApiError.badRequest(e.massage));
        }
    }
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        limit = limit || 9;
        page = page || 1;
        let offset = (page * limit) - limit;
        let devices;
        if(!brandId && !typeId)
        {
            devices = await Device.findAndCountAll({limit, offset});
        }
        if(brandId && !typeId)
        {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset});
        }
        if(!brandId && typeId)
        {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset});
        }
        if(brandId && typeId)
        {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset});
        }
        return res.json(devices);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}] //Получение информации вместе с устройством
        });
        return res.json(device);
    }
}

module.exports = new DeviceController();