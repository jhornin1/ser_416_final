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
const multer = require('multer')
const bodyParser = require('body-parser')

const port = 8080
const app = express()
const upload = multer()
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up body parser
app.use(bodyParser.json())

// CREATE ENDPOINTS

// GET Home Page
app.get('', (req, res) => {
    res.render('index', {
    })
})

// POST Book Space
app.post('/space', upload.single('input'), (req, res) => {
    console.log(req.body)

    res.status(204).send()
})

// GET Book Space
app.get('/space', (req, res) => {
    res.render('space', {
        title: 'Space Booking'
    })
})

// GET Rent Equipment
app.get('/equipment', (req, res) => {
    res.render('equipment', {
        title: 'Rent Equipment'
    })
})

// GET Order Catering
app.get('/catering', (req, res) => {
    res.render('catering', {
        title: 'Order Catering'
    })
})

// GET Order Home Care
app.get('/homecare', (req, res) => {
    res.render('homecare', {
        title: 'Order Home Care'
    })
})

// GET Order Shuttle services
app.get('/shuttle', (req, res) => {
    res.render('shuttle', {
        title: 'Shuttle Services'
    })
})

// GET Class actions
app.get('/class', (req, res) => {
    res.render('class', {
        title: 'Class Schedule'
    })
})

// GET Volunteer Sign Up
app.get('/volunteer', (req, res) => {
    res.render('volunteer', {
        title: 'Volunteer Sign Ups'
    })
})

// POST Donations
app.post('/donation', upload.single('input'), (req, res) => {
    let cardNum = req.body.cardnum
    let amount = req.body.amount


    res.status(200).render('receipt', {
        message: 'Your donation of ' + amount + ' has been charged to card ' + cardNum + '.'
    })
})

// GET Donations
app.get('/donation', (req, res) => {
    res.render('donation', {
        title: 'Donations'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
    console.log('To access webpage, open a browser and navigate to "localhost:' + port + '"')
})