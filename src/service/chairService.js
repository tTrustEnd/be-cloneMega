const { await } = require("await")
const Chair = require("../model/chair")
const apq = require('api-query-params')

module.exports = {
    createChairSV:async (data) => {
        try {
            if(data){
                let results = await Chair.create(data)
                return results
            }
        } catch (error) {
            console.log('error>>>:',error)
        }
    },
    updateChairSV: async (data) => {
        try {
            if( data && data.id){
                let results = await Chair.updateOne({_id:data.id},{quantity:data.quantity})
                return results
            }
            else{
                let results = await Chair.updateMany({},{quantity:0})
                return results
            }
        } catch (error) {
            console.log('error>>>:',error)
        }
    },
    getChairSV: async (queryString) => {
     
        try {
            if(queryString && queryString.quantity){
                let {filter,page} = apq(queryString)
                console.log(filter)
                const res = await Chair.find({ quantity: { $gt: filter.quantity } });
                return res;
            }
            else{
                const res = await Chair.find({})
                return res;
            }
         
        } catch (error) {
            console.log('error>>>:',error)

        }
    }
}