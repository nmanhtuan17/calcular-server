const router = require('express').Router()
const tuitionCtrl = require('../controller/tuitionCtrl')

router.post('/addTuition', tuitionCtrl.addTuition)
router.get('/', tuitionCtrl.getAlltuition)

module.exports = router