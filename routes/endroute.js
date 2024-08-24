const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(
        `   <div>
                <h1>Final Path.</h1>
                <h2>¡Welcome to the final path!</h2>
                <a href="/">
                <button>Home</button>
                </a>
            </div>
        `
    )
})



module.exports = router