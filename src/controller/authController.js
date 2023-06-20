const {authLoginSV} = require('../service/authService')
module.exports = {
    authLogin: async (req, res) => {
        let result = await authLoginSV(req.body)
        return res.status(200).json({
           statusCode:200,
           data:result
        })
    },
    fetchAccount: async (req, res) => {
        console.log()
        res.status(200).json({
            EC:0,
            data:'s'
        })
    }
}