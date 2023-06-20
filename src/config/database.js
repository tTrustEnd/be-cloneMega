
const mongoose = require('mongoose');
const { options } = require('../routes/user');
var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];
// dbName?: string;
//     /** username for authentication, equivalent to `options.auth.user`. Maintained for backwards compatibility. */
//     user?: string;
//     /** password for authentication, equivalent to `options.auth.password`. Maintained for backwards compatibility. */
//     pass?: string;
const connection = async() =>{
    const options = {
        useNewUrlParser: true,
        user:process.env.DB_USER,
        pass:process.env.DB_PASSWORD,
        dbName:process.env.DB_NAME
    }
    await mongoose.connect(process.env.DB_HOST, options)
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
};
module.exports = connection;