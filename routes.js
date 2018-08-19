const thisApp = require('./app.js');
var express = require('express');
var app = express();
app.use(express.json());
app.set('view engine', 'ejs');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();


router.get('/MedicalRecord', function (req, res) { res.render('pages/MedicalRecord'); });
router.get('/MedicalRecordResults', function (req, res) { res.render('pages/MedicalRecordDisplay'); });

//receiving medical a new medical record
router.post('/MedicalRecord', function (req, res) { 
    console.log("In routes hereeeee!!!!");

    var MedicalRecords = {}
    MedicalRecords.firstName = req.body.firstName;
    MedicalRecords.lastName = req.body.lastName;
    MedicalRecords.gender = req.body.gender;
    MedicalRecords.city = req.body.city;
    MedicalRecords.country = req.body.country;
    MedicalRecords.diabeteStatus =req.body.diabeteStatus;
    console.log(MedicalRecords)
});

module.exports = router