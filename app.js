const express = require('express')
const router = require('./routes/index')
const hourMiddleware = require('./middleware/hourMiddleware')
const validateMiddleware = require('./middleware/validateMiddleware')
const app = express()
const port = 3000

app.use(('/'),hourMiddleware,validateMiddleware,router)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
    
})