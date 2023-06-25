const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const { type } = require('os');
const Schema = mongoose.Schema;

const Uudaichema = new Schema({
    name:String,
    time:String,
    image:String,
},
{
    timestamps:true
})
Uudaichema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Uudai = mongoose.model("Uudai", Uudaichema);

module.exports = Uudai;