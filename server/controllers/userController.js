const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const JsonWebToken = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJWT = (id, email, role) => {
    return JsonWebToken.sign(
         {id: id, email: email, role: role},
          process.env.SECRET_KEY,
          {expiresIn: '24h'}
          );
 }

class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email && !password)
            return next(ApiError.badRequest('Некорректный email или password'));
        if(!email && password)
            return next(ApiError.badRequest('Не задан email'));
        if(email && !password)
        return next(ApiError.badRequest('Не задан password'));

        const candidate = await User.findOne({where: {email}})
        if(candidate)
            return next(ApiError.badRequest('Такой email уже существует'));

        const hashPassword = await bcrypt.hash(password, 5); // Хеширование пароля 

        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});

        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token});
        
    }
    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user){
            return next(ApiError.internal('Пользователь с таким email не найден!'))
        }
        let compareSync = bcrypt.compareSync(password, user.password);
        if(!compareSync){
            return next(ApiError.internal('Введен неверный пароль!'))
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token});
    }
    async check(req, res, next) {
        const {id, email, role} = req.user;
        const token = generateJWT(id, email, role);
        return res.json({token});
    }   
}

module.exports = new UserController();