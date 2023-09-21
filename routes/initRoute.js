const userRoute = require('./userRoute')
const courseRoute = require('./course')
const tuitionRoute = require('./tuitionRoute')
const initRoute = (app) => {
    app.use('/api/courses', courseRoute)
    app.use('/api/users', userRoute)
    app.use('/api/semester', tuitionRoute)
}


module.exports = initRoute