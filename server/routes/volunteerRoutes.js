const express = require('express')
const router = express.Router()
const { registerVolunteer, getVolunteers, updateVolunteer, deleteVolunteer } = require('../controllers/volunteerController')
const protect = require('../middleware/authMiddleware')

router.post('/', protect, registerVolunteer)
router.get('/', getVolunteers)
router.put('/:id', protect, updateVolunteer)
router.delete('/:id', protect, deleteVolunteer)

module.exports = router