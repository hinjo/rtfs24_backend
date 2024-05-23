const express = require("express")
const dotenv = require("dotenv"),
  { Client } = require("pg")

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()

const app = express()
const port = process.env.PORT || 3000

// variabler i api:er brukar ligga i db
// const count = 0

app.get("/", (_request, response) => {
  response.send({ hello: "World!!!" })
  // hämta från databas
  // count++

  // response.send("<html><head></head><body>Hello there</body></html>")
})

app.get("/hej", (_request, response) => {
  response.send("hej på dig!!!!! :)")
  // response.send("<html><head></head><body>Hello there</body></html>")
})

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM cities WHERE name = $1", [
    "Stockholm"
  ])

  response.send(rows)
})

app.get("/health", (_request, response) => {
  response.status(200).send("OK")
  // response.send("<html><head></head><body>Hello there</body></html>")
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
