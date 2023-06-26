const Chair = require("../model/chair")
const { createChairSV,updateChairSV } = require("../service/chairService")

module.exports = {
    createChair: async (req, res) => {
        let results = await createChairSV(req.body)
        return res.status(200).json({
            EC:0,
            data:results
        })
    },
    getChair: async (req, res) => {
        const result = await Chair.find({})
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateChair: async (req, res) => {
        let results = await updateChairSV(req.body)
        return res.status(200).json({
            EC:0,
            data:results
        })
    }
}