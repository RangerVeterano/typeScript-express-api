import express from "express";

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')

  res.status(401).json({
    ok:false,
    mgs: 'No hay token en la peticion'
  })

  res.json({
      ok: 'True',
      msg: 'Todo piola'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})