const yup = require('yup')

const userSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required()
})

module.exports = userSchema