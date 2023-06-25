const {getUudaiSV,createUudaiSV, updateFilmSV, deleteFilmSV} = require('../service/uudaiService')
module.exports = {
    getUudai: async (req, res) => {
        let result = await getUudaiSV(req.query)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    createUudai: async (req, res) => {
        console.log(req.body)
        let result = await createUudaiSV(req.body)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateFilms: async (req, res) => {
        let result = await updateFilmSV(req.body)
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    deleteFilms: async (req, res) => {
        let result = await deleteFilmSV(req.query.id)
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    getImage : async (req, res) => {
        return res.status(200).json({
            EC:0,
            data: 'getimage'
        })
    }
}   