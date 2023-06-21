const { createUserSV, getAllUserSV, deleteAUserSV, changePassSV, updateUserSV } = require('../service/userservice')
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
        console.log(req.query.id)
        let result = await deleteAUserSV(req.query.id)
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    changePassWord: async (req, res) => {
        let result = await changePassSV(req.body)
       return res.status(200).json({
        EC:0,
        data:result
       })
    },
    updateAUser:async (req, res) => {
        let result = await updateUserSV(req.body)
        res.status(200).json({
            status:200,
            data:result
        })
    }
}