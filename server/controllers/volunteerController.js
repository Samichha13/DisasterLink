const Volunteer = require('../models/Volunteer')

const registerVolunteer = async (req, res) => {
    try {
        const { skills, location } = req.body
        const volunteer = await Volunteer.create({
            user: req.user.id,
            skills,
            location,
            availability: true
        })
        res.status(201).json(volunteer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find()
            .populate('user', 'name email role')
            .populate('assignedAlert', 'title status')
        res.status(200).json(volunteers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json(volunteer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteVolunteer = async (req, res) => {
    try {
        await Volunteer.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Volunteer removed' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { registerVolunteer, getVolunteers, updateVolunteer, deleteVolunteer }