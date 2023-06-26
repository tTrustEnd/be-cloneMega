const Chair = require("../model/chair")

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
    }
}