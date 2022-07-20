const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {

        const destinationPath = path.join(__dirname, '..', '..', 'public', 'img', 'profiles');

        callback(null, destinationPath)
    },
    filename: (request, file, callback) => {
        const filename = `${uuid()}-${file.originalname}`;

        callback(null, filename);

    }
})

module.exports = storage;