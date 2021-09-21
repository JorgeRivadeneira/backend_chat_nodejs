/*

path: api/login

*/

const {Router} = require('express');
const {crearUsuario, login, renewToken} = require('../controllers/auth');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt.js');

const router = Router();

router.post('/new', [
    /* Estos son middlewares para validar los camnpos */
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email','Debe ingresar un email valido').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6}),
    validarCampos,
],  crearUsuario);

router.post('/', [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos,
],  login);

//Validar JWT
router.get('/renew', validarJWT, renewToken);

module.exports = router;