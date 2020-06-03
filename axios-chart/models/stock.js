const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockSchema = new Schema({
    name: String,
})

const Acronimo = mongoose.model('Acronimo', stockSchema)
module.exports = Acronimo;