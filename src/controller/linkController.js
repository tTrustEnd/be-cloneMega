const Link = require("../model/linkpay")
const aqp = require('api-query-params')
module.exports = {
    getLink: async (req, res) => {
        let {filter,page,sort} = aqp(req.query)
        let result = await Link.find({}).sort(sort)
        // console.log(result)
        return res.status(200).json({
            EC:0,
            data:result
        })
    }
}