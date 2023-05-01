const clientsService = require('../models/clients.model')

module.exports = class ClientsService{
    static async getAll(){
        try {
            const clients = await clientsService.find()
            return clients
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async create(data){
        try {
            await clientsService.create(data)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async delete(id){
        try {
            await clientsService.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}