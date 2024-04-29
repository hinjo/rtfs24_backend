const express = require("express")

const app = express(),
  port = process.env.PORT || 3000

app.get("/", (_request, response) => {
  response.send({ hello: "World" })
  // response.send("<html><head></head><body>Hello there</body></html>")
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
