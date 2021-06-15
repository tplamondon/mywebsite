// https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app

//require('dotenv').config()

//server
const express = require('express')
const mustacheExpress = require('mustache-express');
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


const port = 80

app.engine('html', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views');
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => res.render('index.html'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
