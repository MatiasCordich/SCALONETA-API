const express = require('express')
const app = express()

const { loadPlayers, loadTeam, loadAll } = require("./controllers/db")

const jugadoresData = require("./db/jugadores.json")

const port = 8800


app.get('/', (req,res) => {
  res.send("LA SCALONETA")
})

app.get('/jugadores', (req, res) => {
  res.send(JSON.stringify(jugadoresData))
})

app.get('/seleccion', (req, res) => {
    res.send(loadTeam())
})

app.get('/all', (req, res) => {
  res.send(loadAll())
})

app.listen(port, () => {
    console.log("Server running...")
})
