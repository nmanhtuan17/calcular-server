const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const URL = process.env.URL

const connect = async()=> {
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('connect db success');
    } catch (error) {
        console.log('st wrong');
    }
}

module.exports = {connect}