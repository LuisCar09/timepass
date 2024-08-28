const express = require('express')
const router = require('./routes/index.js')
const hourMiddleware = require('./middleware/hourMiddleware.js')
const app = express()
const port = 3000

app.use(('/'),hourMiddleware,router)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
    
})