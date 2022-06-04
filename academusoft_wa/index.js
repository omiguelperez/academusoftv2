const port = process.env.NODE_PORT || 5000
const express = require('express')

const app = express()
app.use(express.static('public'))

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server running on port ${port}`)
})
