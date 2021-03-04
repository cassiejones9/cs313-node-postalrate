const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/postal', (req, res) => res.render('pages/index'))

// app.get("/math", (req, res) => {
//   var result = solveMath(req);
//   res.render("pages/results", { answer: result });
// });



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
