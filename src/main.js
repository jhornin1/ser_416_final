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
const hbs = require('hbs')

const port = 8080
const app = express()
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Home Page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Best Community Services'
    })
})

// Book Space
app.get('/space', (req, res) => {

})

// Rent Equipment
app.get('/equipment', (req, res) => {

})

// Order Catering
app.get('/catering', (req, res) => {

})

// Order Home Care
app.get('/homecare', (req, res) => {

})

// Order Shuttle services
app.get('/shuttle', (req, res) => {

})

// Class actions
app.get('/class', (req, res) => {

})

// Volunteer Sign Up
app.get('/volunteer', (req, res) => {

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})