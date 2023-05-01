const clientsService = require('../services/clients.service')

module.exports = class ClientsController{
    static async getClients(req,res){
        try {
            const clients = await clientsService.getAll()
            return res.render('dashboard/index', {clients})
        } catch (error) {
            return res.render('dashboard/index', {error: error.message})
        }
    }

    static async createClient(req,res){
        try {
            await clientsService.create(req.body)
            return res.redirect('/dashboard')
        } catch (error) {
            return res.render('dashboard/create', {error: error.message})
        }
    }

    static async deleteClient(req, res){
        try {
            await clientsService.delete(req.params.id)
            return res.redirect('/dashboard')
        } catch (error) {
            return res.redirect('/dashboard')
        }
    }
}