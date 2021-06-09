const app = require("express")()

const http = require("http").createServer(app)

const io = require("socket.io")(http)

app.get("/", (req, res) => { res.sendFile(__dirname + "/index.html")
})

app.get("/chat", (req, res) => { res.sendFile(__dirname + "/chat.html")
})

io.on("connection", client => {
  console.log("user connection", client.id)

io.on("disconnect", client => {
  console.log("user disconnect", client.id)
  })

client.on("mensaje", data => {
  console.log("client", data)

  client.broadcast.emit("mensaje", data)
  })
})

http.listen(3000, (error) => {
  if (error) throw new Error(error)
  console.log("*:3000")
})