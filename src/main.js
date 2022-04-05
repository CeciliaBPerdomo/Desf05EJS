/*
npm init -y
npm i
npm i express
npm i ejs
*/ 

const express = require('express')
const app = express()
const productos = []

app.use(express.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('productos', { productos })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
})

/* -------------- Server listen ------------------------------------*/
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))