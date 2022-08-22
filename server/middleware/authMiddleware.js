const JsonWebToken = require('jsonwebtoken')

module.exports = function (req, res, next){
    if(req.method === 'OPTIONS'){
        next();
    }
    try{
        const token = req.headers.authorization.split(' ')[1]; // получение токена из запроса
        if(!token){
            return res.status(401).json({massage: 'Пользователь не авторизован!'});
        }
        const decoded = JsonWebToken.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (e){
        return res.status(401).json({massage: 'Пользователь не авторизован!'});
    }
}