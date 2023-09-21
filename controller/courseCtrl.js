const Course = require('../models/courses')


module.exports = {
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.find({})
            res.status(200).json(courses)
        } catch (error) {

            res.status(500).json('get courses error')
        }
    },
    addCourse: async (req, res) => {
        try {
            const course = req.body
            const newCourse = new Course(course)
            await newCourse.save()
            res.status(200).end()
        } catch (error) {
            res.status(500).end()
        }
    }
}