const express = require("express");
const router = express.Router();

const notes = require("../controllers/notesController");

// Create a new Note
router.post("/", notes.create);

// Retrieve all Notes
router.get("/", notes.findAll);

// Retrieve a single Note with id
router.get("/:id", notes.findOne);

// Update a Note with noteId
router.put("/:id", notes.update);

// // Delete a Note with noteId
// router.delete('/notes/:noteId', notes.delete);

module.exports = router;
