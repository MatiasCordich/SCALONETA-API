const { readFileSync } = require('fs')

const loadPlayers = () => {
  let players = JSON.parse(readFileSync("./db/jugadores.json"))
  return players
}

const loadTeam = () => {
  let players = JSON.parse(readFileSync("./db/seleccion.json"))
  return players
}

const loadAll = () => {
  let players = JSON.parse(readFileSync("./db/all.json"))
  return players
}

module.exports = {loadPlayers, loadTeam, loadAll}