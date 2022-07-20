const path = require('path');
const {check} = require('express-validator')

module.exports = [
    check('name').notEmpty().withMessage('is necessary write a name').bail().trim(),
    check('email').notEmpty().withMessage('is necessary write a email account').bail().trim().bail()
    .normalizeEmail().bail().isEmail().withMessage('write a correct format email'),
    check('password').notEmpty().withMessage('is necessary write a email account').bail().isLength({min: 6})
    .withMessage('the password has to need more than 6 ').bail().trim(),
    check('avatar').custom((value, { request })=> {
        let file = request.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file) {
            throw new Error('Precisa escolher um arquivo');
        } else {
            let fileExtesion = path.extname(file.originalname);

            if(!acceptedExtensions.includes(fileExtesion)) {
                throw new Error(`as extensóes de arquivo permitidas são ${acceptedExtensions.join(', ')}`);
            }
        }

        return true
    })
]