// https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app

//require('dotenv').config()

//server
const express = require('express')
const mustacheExpress = require('mustache-express');
const app = express()
const sass = require('sass');
const path = require('path');

//const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}))


const port = process.env.port || 80

app.engine('html', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views');
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => res.render('index.html'))
app.get('/navbar', (req, res) => res.render('navbar.html'))
app.get('/downloadResume', function (req, res) {
  var filePath = '/files/'
   var file = path.join(__dirname + filePath, 'T Plamondon Resume Website.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
