const mongoose = require('mongoose')


const Course = mongoose.Schema({
    nameCourse: {type: String, require: true},
    maMH: {type: String, require: true},
    heSo: {type: Number, require: true},
    tinChi: {type: Number, require: true}
})


module.exports = mongoose.model('Course', Course)