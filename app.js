// require packages used in the project
const express = require('express')
const app = express()
const port = 3000 // Define server related variables

// require express-handlebars
const exphbs = require('express-handlebars')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting routing
app.get('/', (req, res) => {
  res.render('index-home')
})

app.get('/about', (req, res) => {
  res.render('index-about')
})

app.get('/portfolio', (req, res) => {
  res.render('index-portfolio')
})

app.get('/contact', (req, res) => {
  res.render('index-contact')
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}.`)
})