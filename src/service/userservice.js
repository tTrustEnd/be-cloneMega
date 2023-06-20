const User = require('../model/user')
module.exports = {
    createUserSV: async (data) => {
        try {
            let result = await User.create(data)
            return result
        } catch (error) {
            console.log('error:', error);
            return null
        }
    },
    getAllUserSV: async (queryString) => {
        let { limit, page } = queryString;
        try {
            if (queryString) {
                let offset = (page - 1) * limit
                let result = await User.find({}).skip(offset).limit(limit).exec();
                return result
            }
            else {
                let result = await User.find({})
                return result
            }

        } catch (error) {
            console.log('>>> error', error)
        }
    },
    deleteAUserSV: async (id) => {
        try {
            let result = User.deleteById(id);
            return result;
        } catch (error) {
            console.log('error:', error)
        }
    },
    updateAUserSV: async (data) => {
        console.log(data)
        let userUpdate = await User.find({ _id: data.id })
        try {
            if(userUpdate[0].password === data.password){
                let result = await User.updateOne({ _id: data.id }, {password:data.newPassword})
                return result
            }
        } catch (error) {   
            console.log('error:', error)
        }
    }
}