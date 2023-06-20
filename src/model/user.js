const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const { type } = require('os');
const Schema = mongoose.Schema; // <-- EDIT: missing in the original post
// const ImageSchema = new Schema({
//     img: { 
//         data: Buffer, 
//         contentType: String 
//      },
//      timestamps: true
// })
// const Image = mongoose.model("Image", ImageSchema);
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // image:{  type: mongoose.ObjectId,ref: 'Image'}
}
,
{
    timestamps:true
});
UserSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const User = mongoose.model("User", UserSchema);

module.exports = User;