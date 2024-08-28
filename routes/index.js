const express = require('express')
const endRoute = require('./endroute')
const validateMiddleware = require('../middleware/validateMiddleware')
const router = express.Router()

router.get('/', (req, res) => {
    const redirect = req.query.mensaje
    const mensaje = redirect ? redirect : ''

    const timeFormtOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }
    const date = new Date().toLocaleTimeString('en-GB', timeFormtOptions)


    res.send(
        `   <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <div>
                        <h1>Welcome</h1>
                        <h2>Current time: ${date}</h2>
                        <span>${mensaje}</span>
                        <a  href="/endroute">
                        <button >End Route</button>
                        </a>
                    </div>
                </body>
            </html>
        `
    )
})
router.use('/endroute',validateMiddleware,endRoute)
router.use((req, res) => {
    res.send('<h1>Page not found 401</h1>')
})
module.exports = router


// router.get('/validate', (req, res) => {

//     const validate = req.validate

//     if (validate) {
//         res.redirect("/endroute")
//     } else {

//         res.redirect(`/?mensaje=${encodeURIComponent(res.locals.mensaje)}`)
//     }

// })
//router.use('/endroute',, endRoute)
