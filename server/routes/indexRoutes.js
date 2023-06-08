const express = require('express')
const router = express.Router()
const service = require('../services/render')
const controller = require('../controller/controller')

router.get('/', service.homeRoutes)
router.get('/add-user', service.addUsers)
router.get('/update-user', service.updateUsers)
router.patch('/update-user', service.updateUsers)

// api

router.post('/api/users', controller.create)
router.get('/api/users', controller.find)
router.get('/api/users/:id', controller.findOne)
router.patch('/api/users/:id', controller.update)
router.put('/api/users/:id', controller.update)
router.delete('/api/users/:id', controller.delete)

module.exports = router
