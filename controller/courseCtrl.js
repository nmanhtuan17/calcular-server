const Course = require('../models/courses')


// Course.insertMany([
//     {
//         nameCourse: 'Hệ thống thông tin',
//         maMH: 'IS122',
//         heSo: 1.6,
//         tinChi: 3
//     },
//     {
//         nameCourse: 'Lập trình ứng dụng di động',
//         maMH: 'CS322',
//         heSo: 1.8,
//         tinChi: 3
//     },
//     {
//         nameCourse: 'Công nghệ phần mềm',
//         maMH: 'CS332',
//         heSo: 1.8,
//         tinChi: 2
//     },
// ]).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });
module.exports = {
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.find({})
            res.status(200).json(courses)
        } catch (error) {

            res.status(500).json('st wrong')
        }
    },
    addCourse: async (req, res) => {

    }
}