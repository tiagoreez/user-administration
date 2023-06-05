const express = require('express')
const router = express.Router()
const service = require('../services/render')

router.get('/', service.homeRoutes)
router.get('/add-user', service.addUsers)
router.get('/update-user', service.updateUsers)

module.exports = router
