const express = require('express');

const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const validators = require('../middlewares/validators');


const authenticationRouter = express.Router();

authenticationRouter.post(
    '/registration',
    validators.validateRegistrationData,
    hashPass,
    userController.registration,
);

authenticationRouter.post(
    '/login',
    validators.validateLogin,
    userController.login,
);

authenticationRouter.post(
    './send_'

)







module.exports = authenticationRouter;