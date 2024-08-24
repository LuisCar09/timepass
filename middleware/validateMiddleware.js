const validateMiddleware = (req,res,next) =>{
    const hour = req.hour
  
    if (hour > 22) {
        req.validate = true
    }else{
        res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`
    }

    next()
}
module.exports = validateMiddleware