const path = require('path')
module.exports = {
    uploadImage: async (data) => {
        try {
            if (data.image.length === 0 || data.image.length === 'undefined') {
                let sampleFile = data.image;
                console.log(sampleFile)
                let name = sampleFile.name;
                let newname = name + new Date().getTime();
                let extname = path.extname(name)
                uploadPath = path.join(__dirname, '../public/images/') + newname + extname;
                sampleFile.mv(uploadPath, function (err) {
                    if (err)
                        return err;
                });
                return 'File uploaded!'
            }
            if (data.image.length > 1) {
                let sampleFile = data.image;
                for (let i = 0; i < sampleFile.length; i++) {
                    let name = sampleFile[i].name;
                    let newname = name + new Date().getTime();
                    let extname = path.extname(name)
                    uploadPath = path.join(__dirname, '../public/images/') + newname + extname;
                    sampleFile[i].mv(uploadPath, function (err) {
                        if (err)
                            return err;
                    });
                }
                return 'File uploaded!'
            }
           
        } catch (error) {
            console.log('error:', error)
        }
    }
}