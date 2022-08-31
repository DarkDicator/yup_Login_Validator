const validate = (schema) => async (req, res, next) => {
    const reqBody = req.body

    try{
        await schema.validate(reqBody)
        next()
        return next()
    }catch(e){
        res.status(400).json(e.message)
    }
}



module.exports = validate