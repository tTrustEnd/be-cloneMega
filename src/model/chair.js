const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const ChairSchema = new Schema({
    name: String,
    price: Number,
},
    {
        timestamps: true
    })
    ChairSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Chair = mongoose.model("Chair", ChairSchema);

module.exports = Chair;