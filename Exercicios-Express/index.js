const express = require('express')
const app = express()
const saudacao = require('./saudacaomid')

app.use('/opa', (req, res, next) => { // serve para qualquer tipo de requisição app.use
    res.send("Teste <h1>bem</h1>")
    next()
})




app.get('/opa', (req, res) => { // serve para qualquer tipo de requisição app.use
    console.log("Durante")
    res.json([
        {
        name: 'iPad',
        price: 1899.00,
        discount: 0.12
    },
        {
        name: 'iPad',
        price: 1899.00,
        discount: 0.12
    },
        {
        name: 'iPad',
        price: 1899.00,
        discount: 0.12
    },

])
})

app.listen(3001, ()=> {
    console.log('Backend Executando na porta 3001')
})