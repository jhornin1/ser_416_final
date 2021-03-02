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

    // Start by checking if they filled out the time portion correctly
    // at least one box must be checked, and it must be a continuous range
    let firstBox = -1 // If it is negative, then a box was not checked. else, it is the first index
    let rangeOver = false
    let duration = 0
    for (let i = 0; i < 10; i++) {
        if (req.body[i] !== undefined) { // If it has a value
            if (rangeOver) { // and there is a gap between time entries
                res.render('space', {
                    title: 'Space Booking',
                    timeErr: 'Time slot entries must be a continuous range.'
                })
                return
                // notify the client and then exit the endpoint
            }

            if (firstBox < 0) { // and it is the first value
                firstBox = i // set it as the first value
            }

            duration++ // increment the duration of the booking.

        } else { // If the item is undefined
            if (firstBox >= 0) { // and a box has been checked
                rangeOver = true // note that the acceptable range is over
            }
        }
    }

    // If we leave the loop and firstBox is still negative, then no selection was made.
    if (firstBox < 0) {
        res.render('space', {
            title: 'Space Booking',
            timeErr: 'Time slot must be selected.'
        })
        return

    } else { // If selections are valid, then send a receipt.

        let date = new Date(Date.parse(req.body.date)).toDateString()
        let time = req.body[firstBox]

        res.render('receipt', {
            message: 'Your booking has been made for ' + req.body.room + ' on ' +
                     date + ' at ' + time + ' for ' + duration + ' hours.'

        })
    }
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