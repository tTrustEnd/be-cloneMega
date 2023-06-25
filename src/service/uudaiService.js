const aqp = require('api-query-params');
const Uudai = require('../model/uudai')

module.exports = {
    getUudaiSV: async (queryString) => {
        const { filter, page, limit,sort } = aqp(queryString)
        delete filter.page;
        let offset = (queryString.page - 1) * limit
        try {
            if (queryString != undefined) {
                let result = await Uudai.find(filter).skip(offset).limit(limit).sort(sort);
                return result;
            } else {
                let result = await Uudai.find({});
                return result;
            }
        } catch (error) {
            console.log('>>>error:', error)
        }
    },
    createUudaiSV: async (dataFilm) => {
        try {
            if (dataFilm && dataFilm.length > 0) {
                let result = [];
                for (let i = 0; i < dataFilm.length; i++) {
                    let res = await Uudai.create(dataFilm[i]);
                    result.push(res)
                }
                return result;
            }
            else{
                let res = await Uudai.create(dataFilm);
                return res
            }
        } catch (error) {
            console.log('>>>error:', error)
        }
    },
    updateFilmSV: async (data) => {
        console.log(data)
        try {
            if (data) {
                let result = Film.updateOne({ _id: data.id }, data.dataUpdate)
                return result
            }
        } catch (error) {
            console.log('>>>error:', error)
        }
    },
    deleteFilmSV: async (id) => {
        try {
            if (id) {
                let result = await Film.deleteById(id);
                return result
            }
        } catch (error) {
            console.log('>>>error:', error)
        }
    }
}