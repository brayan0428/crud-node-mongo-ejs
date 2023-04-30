const usersService = require('../services/users.service')

module.exports = class UsersController{
    static async login(req,res){
        try {
            const user = await usersService.findUser(req.body)
            req.session.user = user
            return res.redirect('dashboard/')
        } catch (error) {
            return res.render('auth/login', {error: error.message})
        }
    }

    static async register(req,res){
        try {
            await usersService.createUser(req.body)
            return res.send()
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}