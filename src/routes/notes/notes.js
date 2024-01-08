const express = require("express");
const { 
    createNoteController,
    updateNoteController,
    deleteNoteByIdController,
    getAllNotesController,
    getAllNotesForUserController,
    getNoteByIdController,
    shareNoteWithUsersController,
    searchNotesByQueryController,
    searchNotesByQueryForUserController 
} = require('../../controllers/notes/notes-controller');
const auth = require('../../middlewares/auth');

const notesRouter = express.Router();

// notes apis
notesRouter.post("/notes/create", auth, createNoteController);
notesRouter.put("/notes/update/:id", auth, updateNoteController);
notesRouter.delete("/notes/delete/:id", auth, deleteNoteByIdController);

// notes get apis
notesRouter.get("/notes/getAll", auth, getAllNotesController);
notesRouter.get("/notes/getAllByUser", auth, getAllNotesForUserController);
notesRouter.get("/notes/get/:id", auth, getNoteByIdController);

// share note api
notesRouter.post("/notes/share/:id", auth, shareNoteWithUsersController);

// search by query apis
notesRouter.get("/notes/search", auth, searchNotesByQueryController);
notesRouter.get("/notes/searchByUser", auth, searchNotesByQueryForUserController);

module.exports = notesRouter;