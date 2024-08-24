const getHourMiddleware = (req,res,next) => {
    const date = new Date()
    const hour = date.getHours();
    const minutes = date.getMinutes()
    
    req.hour = hour
    req.minutes = minutes
    next()
}
module.exports = getHourMiddleware