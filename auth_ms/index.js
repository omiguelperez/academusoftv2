const port = process.env.NODE_PORT || 5000
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.get('/menu/menu', (req, res) => {
  res.sendfile(path.join(__dirname, 'public', 'menu', 'menu.html'))
})

app.get('/course/course_list', (req, res) => {
  res.sendfile(path.join(__dirname, 'public', 'course', 'course_list.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server running on port ${port}`)
})
