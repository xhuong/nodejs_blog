const express = require('express')
const app = express()
const port = 3000

app.get('/m', (req, res) => {
    let name = 'aaa'

    let a = name;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})