const { uploadImage } = require('../service/uploadService')
module.exports = {
    uploadImage: async (req, res) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        else {
            let result = await uploadImage(req.files)
            return res.status(200).json({
                EC: 0,
                data: result
            })
        }

    }
}