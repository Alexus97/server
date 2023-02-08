const express = require('express')
const app = express()
const port = 3001

app.get ("/", (req, res) =>{
  res.send("HOla, mundo")
})

app.listen(port, ()=>{
  console.log("Mi puerto es "+ port)
})

