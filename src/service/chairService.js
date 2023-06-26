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
    }
}