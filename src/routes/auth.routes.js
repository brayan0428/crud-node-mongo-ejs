const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

router.get('/', function(req,res){
    return res.render('auth/login')
})
router.get('/register', function(req,res){
    return res.render('auth/register')
})
router.post('/login', usersController.login)
router.post('/register', usersController.register)

module.exports = router