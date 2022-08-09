//---   api/tickets/ticket:id/notes

const express = require('express')
const router = express.Router({ mergeParams: true })    //merge params enables it to merge with the ticket route
const { getNotes, addNote } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, addNote)

module.exports = router
