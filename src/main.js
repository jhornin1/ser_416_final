/**
 * Main file for the Final Project for SER 416 Spring A 2021
 *
 * Project serves as a prototype for the Community Best Services website.
 *
 * Created By: John Horning (jhornin1@asu.edu johnhorning@gmail.com)
 * @version 2/17/2021
 */
// Imports
const express = require('express')
const path = require('path')

const port = 8080
const app = express()
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Best Community Services'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})