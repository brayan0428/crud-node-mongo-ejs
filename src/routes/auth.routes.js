const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

router.get('/', function(req,res){
    return res.render('auth/login')
})
router.post('/login', usersController.login)
router.post('/register', usersController.register)

module.exports = router