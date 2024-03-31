require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req,res) => {
    res.send('Hello jsBackend');
})

app.get('/carrer',(re,res) => {
    res.send("<h1>carrer page routh</h1>")
})

app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${process.env.PORT}`);
    console.log("chai out code js backend deploy..");

})
