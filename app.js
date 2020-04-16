const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))


app.get('*', (req, res) => {
  res.status(404).send({message: "Not found"})
})

var server = app.listen(port || 3000, function() {
  console.log(`Server up and running on port: ${port}`)
})

module.exports = server
