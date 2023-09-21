const router = require('express').Router()
const courseCtrl = require('../controller/courseCtrl')

router.post('/addCourse', courseCtrl.addCourse)
router.get('/', courseCtrl.getAllCourses)

module.exports = router
