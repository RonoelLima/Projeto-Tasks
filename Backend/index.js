const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.listen(5000, () => {
    console.log('Backend executando na porta 5000')
})





// Aula de revisão do express
// app.use(meuJson())
// app.use(bodyParser.json())

// function meuJson() {
//     return (req, res, next) => {
//         console.log('Antes de tudo: meu middlewere')
//         next()
//     }
// }

// app.post('/:valor', (req, res, next) => {
//     console.log('Func 0')
//     next()
// })

// app.post('/:valor', (req, res, next) => {
//     console.log('Func 2')
//     res.status(200).send('Meu Backend = ' + req.body.dependentes[0].nome)
//     next()
// })

// app.post('/:valor', (req, res) => {
//     console.log('Func 3')
// })