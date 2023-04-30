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
            const user = await usersService.findByEmail(req.body.email)
            if(user) throw new Error('Ya existe un usuario registrado con ese correo')
            await usersService.createUser(req.body)
            return res.redirect('/')
        } catch (error) {
            return res.render('auth/register', {error: error.message})
        }
    }
}