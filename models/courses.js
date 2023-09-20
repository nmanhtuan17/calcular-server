const mongoose = require('mongoose')


const Course = mongoose.Schema({
    nameCourse: {type: String, require: true},
    maMH: {type: String, require: true},
    heSo: {type: String, require: true},
    tinChi: {type: String, require: true}
})


module.exports = mongoose.model('Course', Course)