const mongoose = require('mongoose')


const Tuition = mongoose.Schema({
    hocKy: {type: Number, require: true},
    nhom: {type: Number, require: true},
    nam: {type: String, require: true},
    hocPhi: {type: Number, require: true},
    soTin: {type: Number, require: true},
    soMon: {type: Number, require: true},
    user: {type: String, require: true}
})


module.exports = mongoose.model('Tuition', Tuition)