const aqp = require('api-query-params');
const Film = require('../model/films')

module.exports = {
    getFilmsSV: async (queryString) => {
        const { filter, page, limit,sort } = aqp(queryString)
        delete filter.page;
        let offset = (queryString.page - 1) * limit
        try {
            if (queryString != undefined) {
                let result = await Film.find(filter).skip(offset).limit(limit).sort(sort);
                return result;
            } else {
                let result = await Film.find({});
                return result;
            }
        } catch (error) {
            console.log('>>>error:', error)
        }
    },
    createFilmsSV: async (dataFilm) => {
        try {
            if (dataFilm) {
                let result = [];
                for (let i = 0; i < dataFilm.length; i++) {
                    let res = await Film.create(dataFilm[i]);
                    result.push(res)
                }
                return result;
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