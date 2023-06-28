const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const { type } = require('os');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    name:String,
},
{
    timestamps:true
})
LinkSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Link = mongoose.model("link", LinkSchema);

module.exports = Link;