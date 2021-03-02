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
const util = require('./util')

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

    let validate = util.validateTime(req.body)

    if (validate !== '') { // If the method returned a non-empty string, send back the error
        res.render('space', {
            title: 'Space Booking',
            timeErr: validate
        })

    } else { // If the checkboxes were valid
        // Find the smallest time selected
        let firstBox = 0
        let counter = 0
        while (true) {
            if (req.body[counter++] !== undefined) {
                firstBox = counter - 1
                break
            }
        }

        // Get the number of times checked
        let duration = Object.values(req.body).length - 2
        // Get the date
        let date = new Date(Date.parse(req.body.date))
        date.setDate(date.getDate() + 1) // adjust for date indexing.
        date = date.toDateString() // get the date in string form.
        // And interpret the selected time.
        let time = req.body[firstBox]

        res.render('receipt', {
            title: 'Receipt',
            message: 'Your booking has been made for ' + req.body.room.bold() + ' on ' +
                date.bold() + ' at ' + time.bold() + ' for ' + duration + ' hours.'
        })
    }
})

// GET Book Space
app.get('/space', (req, res) => {
    res.render('space', {
        title: 'Space Booking'
    })
})

// POST Rent Equipment
app.post('/equipment', upload.single('input', (req, res) => {

}))

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
        title: 'receipt',
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