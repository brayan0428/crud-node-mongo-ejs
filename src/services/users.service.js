const usersModel = require('../models/users.model')
const bcrypt = require('bcrypt')

module.exports = class UsersClient{
    static async findUser(data){
        try{
            const {email, password} = data
            const user = await usersModel.findOne({email})
            if(user){
                const result = await bcrypt.compare(password, user.password)
                if(result){
                    return user
                }
                throw new Error('Credenciales invalidas')
            }
            throw new Error('Usuario no encontrado')
        }catch(error){
            throw new Error(error)
        }
    }

    static async createUser(data){
        try {
            const {name, email, password} = data
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt)
            await usersModel.create({name, email, password: encryptedPassword})
        } catch (error) {
            throw new Error(error)
        }
    }

    static async findByEmail(email){
        try {
            const user = await usersModel.findOne({email})
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    }
}