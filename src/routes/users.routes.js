const { Router } = require('express');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const storage = require('../configs/multer');

const { body } = require('express-validator');

const usersRouter = Router();

const upload = multer({ storage });

const validations = [
    body('name').notEmpty().isString().withMessage('The user must have a name!'),
    body('email').notEmpty().isEmail().withMessage('You must have to put a valid email account!'),

]

usersRouter.get('/', usersController.getCreateScreen);
usersRouter.post('/',
    upload.single('avatar'),
    validations,
    usersController.create);

module.exports = usersRouter;