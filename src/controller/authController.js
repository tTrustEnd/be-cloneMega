const {authLoginSV} = require('../service/authService')
module.exports = {
    authLogin: async (req, res) => {
        let result = await authLoginSV(req.body)
        console.log(result)
        if(result.access_token){
            return res.status(200).json({
                status:200,
                data:result
             })
        }
        else{
            return res.status(201).json({
                status:404,
                data:result
             })
        }
     
    },
    fetchAccount: async (req, res) => {
        console.log()
        res.status(200).json({
            EC:0,
            data:'s'
        })
    }
}