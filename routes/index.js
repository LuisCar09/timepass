const express = require('express')
const endRoute = require('./endroute')
const router = express.Router()

router.get('/', (req, res) => {
    const redirect = req.query.mensaje
    console.log(redirect);
    const mensaje = redirect ? redirect : ''
    
    const timeFormtOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }
    const date = new Date().toLocaleTimeString('en-GB',timeFormtOptions)

    
    res.send(
        `   <div>
                <h1>Welcome</h1>
                <h2>Current time: ${date}</h2>
                <span>${mensaje}</span>
                <a  href="/validate">
                <button >End Route</button>
                </a>
                
            </div>
        `
)
})

router.get('/validate',(req,res)=>{
    
    const validate = req.validate
    
    if (validate) {
        res.redirect("/endroute")
    }else{

        res.redirect(`/?mensaje=${encodeURIComponent(res.locals.mensaje)}`)
    }
    
})
router.use('/endroute',endRoute)

router.use((req,res)=>{
    res.send('<h1>Page not found</h1>')
})
module.exports = router