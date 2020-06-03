const express = require('express');
const router = express.Router();
const Acronimo = require('../models/stock')

/* GET home page */

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/stocks', (req, res, next) => {
  Acronimo.find()
    .then(acronimos => {
      console.log(acronimos)
      res.render('showstocks', {
        acronimos
      })
    })
    .catch(err => console.log(err))
})

router.get('/add', (req, res, next) => {
  res.render('add')
})

router.post('/add', (req, res, next) => {
  const {
    name
  } = req.body;
  const newAcronimo = new Acronimo({
    name
  })
  newAcronimo.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log("error guardando nuevo acronimo", err))

})

module.exports = router;