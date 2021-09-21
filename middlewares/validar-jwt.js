const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    //leer el token
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token a la vista'
        });
    }

    console.log(token);
    try{
        const {uid} = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        next();
    }catch(error){
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        }); 
    }
}

module.exports = {
    validarJWT
}