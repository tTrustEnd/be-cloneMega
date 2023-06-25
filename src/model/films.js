const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const { type } = require('os');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name:String,
    time:String,
    caterogy:String,
    premiere:String,
    director:String,
    actor:String,
    sumary:String,
    sub:String,
    image:String,
    trailer:String,
},
{
    timestamps:true
})
FilmSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Film = mongoose.model("Film", FilmSchema);

module.exports = Film;