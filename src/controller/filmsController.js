const {getFilmsSV,createFilmsSV, updateFilmSV, deleteFilmSV} = require('../service/filmsService')
module.exports = {
    getFilms: async (req, res) => {
        let result = await getFilmsSV(req.query)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    createFilms: async (req, res) => {
        let result = await createFilmsSV(req.body)
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
    }
}