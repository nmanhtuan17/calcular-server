const router = require('express').Router()
const courseCtrl = require('../controller/courseCtrl')

router.get('/', courseCtrl.getAllCourses)


module.exports = router
