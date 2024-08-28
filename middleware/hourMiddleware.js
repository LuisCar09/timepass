const getHourMiddleware = (req,res,next) => {
    const hour = new Date().getHours()
    req.hour = hour
    next()
}
module.exports = getHourMiddleware