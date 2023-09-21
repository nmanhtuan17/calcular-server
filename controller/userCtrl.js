const User = require('../models/users')


module.exports = {
    getUser: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json('st wrong')
        }
    },
    checkLogin: async (req, res) => {
        try {
            const check = await User.find({_id: req.query.id})
            if (check) {
                res.status(200).json(true)
            }
            else{
                res.status(200).json(false)
            }
        } catch (error) {
            res.status(500).json('st wrong in check user')
        }
    }
}