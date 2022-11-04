const express = require('express')
const app = express()

const jugadoresData = require("./db/jugadores.json")
const seleccionData = require("./db/seleccion.json")
const allData = require("./db/all.json")

const port = 8800


app.get('/', (req,res) => {
  res.send("LA SCALONETA")
})

app.get('/jugadores', (req, res) => {
  res.send(jugadoresData)
})

app.get('/seleccion', (req, res) => {
    res.send(seleccionData)
})

app.get('/all', (req, res) => {
  res.send(allData)
})

app.listen(port, () => {
    console.log("Server running...")
})
