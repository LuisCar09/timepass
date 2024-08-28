const validateMiddleware = (req,res,next) =>{
    const hour = req.hour
    res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`
    hour > 12 ? next() : res.redirect(`/?mensaje=${encodeURIComponent(res.locals.mensaje)}`)
    
}
module.exports = validateMiddleware