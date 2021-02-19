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
    })
})

// Book Space
app.get('/space', (req, res) => {
    res.render('space', {
        title: 'Space Booking'
    })
})

// Rent Equipment
app.get('/equipment', (req, res) => {
    res.render('equipment', {
        title: 'Rent Equipment'
    })
})

// Order Catering
app.get('/catering', (req, res) => {
    res.render('catering', {
        title: 'Order Catering'
    })
})

// Order Home Care
app.get('/homecare', (req, res) => {
    res.render('homecare', {
        title: 'Order Home Care'
    })
})

// Order Shuttle services
app.get('/shuttle', (req, res) => {
    res.render('shuttle', {
        title: 'Shuttle Services'
    })
})

// Class actions
app.get('/class', (req, res) => {
    res.render('class', {
        title: 'Class Schedule'
    })
})

// Volunteer Sign Up
app.get('/volunteer', (req, res) => {
    res.render('volunteer', {
        title: 'Volunteer Sign Ups'
    })
})

// Donations
app.get('/donation', (req, res) => {
    res.render('donation', {
        title: 'Donations'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})