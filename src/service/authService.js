const User = require('../model/user')
const jwt = require("jsonwebtoken");
module.exports = {
    authLoginSV: async (dataLogin) => {
        let email = dataLogin.email;
        let password = dataLogin.password;
        let existingUser;
        try {
                existingUser = await User.findOne({email:email})
        } catch (error) {
            console.log('error:', error)
        }
        if (!existingUser || existingUser.password != password) {
            const error = ("Wrong details please check at once");
            return error;
        }

        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
                { userId: existingUser.id, email: existingUser.email },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
            return {
                access_token: token,
                user: existingUser
            }
        } catch (err) {
            const error = "Error! Something went wrong.";
            return error;
        }

    }
}