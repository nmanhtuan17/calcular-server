const userRoute = require('./userRoute')
const courseRouter = require('./course')
const initRoute = (app) => {
    app.use('/api/courses', courseRouter)
    app.use('/api/users', userRoute)
}


module.exports = initRoute