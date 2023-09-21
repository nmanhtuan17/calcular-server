const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')

router.get('/', userCtrl.getUser)

module.exports = router