const Tuition = require('../models/tuitions')

module.exports ={
    getAlltuition: async ( req, res) => {
        try {
            const allTuition = await Tuition.find({})
            res.status(200).json(allTuition)
        } catch (error) {
            res.status(500).json('wrong on get tuition')
        }
    },
    addTuition: async(req, res) => {
        try {
            const tuition = req.body
            const newTuition = new Tuition(tuition)
            await newTuition.save()
            res.status(200).end()
        } catch (error) {
            res.status(500).end()
        }
    }
}