const { createUserSV, getAllUserSV, deleteAUserSV, updateAUserSV } = require('../service/userservice')
module.exports = {
    createAUser: async (req, res) => {
        let result = await createUserSV(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getAllUser: async (req, res) => {
        let result = await getAllUserSV(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteAUser: async (req, res) => {
        let result = await deleteAUserSV(req.body.id)
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateAUser: async (req, res) => {
        let result = await updateAUserSV(req.body)
       return res.status(200).json({
        EC:0,
        data:result
       })
    }
}