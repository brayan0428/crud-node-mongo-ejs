const express = require('express')
const router = express.Router()
const clientsController =  require('../controllers/clients.controller')

router.get('/', clientsController.getClients)
router.get('/create', function(req,res){
    return res.render('dashboard/create')
})
router.post('/create', clientsController.createClient)
router.get('/delete/:id', clientsController.deleteClient)

module.exports = router