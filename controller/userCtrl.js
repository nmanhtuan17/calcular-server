const User = require('../models/users')


module.exports = {
    getUser: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json('st wrong')
        }
    }
}