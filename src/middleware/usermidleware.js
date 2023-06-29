const Joi = require('joi');

module.exports = {
    authenticationUser: async (req, res, next) => {
        let { name, email, password, phone } = req.body

        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(30).required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone: Joi.string().min(10).max(11),
            role: Joi.string()

        })
        let result = schema.validate(req.body);
        console.log(result)
        if (result.error) {
            return res.status(200).json({
                data: result
            })
        }
        else{
            next()
        }
          
    }
}