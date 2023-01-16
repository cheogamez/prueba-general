//console.log("holis")

//const http = require("http")
//const { setgroups } = require ("process")
//const port = 5000

//const server = http.createServer((req,res) => {
//    res.end ("Esta es la Respuesta")
//})

//server.listen (port, () => console.log("Funcionando ❤"))

const express = require('express')
const { create } = require("express-handlebars")

const app = express()
const port = 5000

const hbs = create({
  extname: ".hbs",
})

app.engine(".hbs", hbs.engine)
app.set("view engine", ".hbs")
app.set("views", "./views")

app.get('/', (req, res) => {
  res.render("home")
})

app.use(express.static(__dirname + "/public"))

app.listen(port,() =>console.log("Servidor Andando..."))

//app.listen(port, () => {
//  console.log(`Ejemplo listando por el Puerto ${port}`)
//}) 