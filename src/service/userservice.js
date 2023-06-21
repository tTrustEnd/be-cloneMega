const User = require('../model/user')
const apq = require('api-query-params')
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
        let {filter,sort} = apq(queryString)
        delete filter.page
        let { limit, page } = queryString;
        try {
            if (queryString) {
                let offset = (page - 1) * limit
                let result = await User.find(filter).skip(offset).limit(limit).sort(sort).exec();
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
    changePassSV: async (data) => {
        let userUpdate = await User.find({ _id: data.id })
        try {
            if(userUpdate[0].password === data.password){
                let result = await User.updateOne({ _id: data.id }, {password:data.newPassword})
                return result
            }
        } catch (error) {   
            console.log('error:', error)
        }
    },
    updateUserSV:async (data) => {
        try {
            let result = User.updateOne({_id:data.id},{name:data.name,phone:data.phone,role:data.role,email:data.email});
            return result
        } catch (error) {
            console.log('error:', error)
        }
    }
}