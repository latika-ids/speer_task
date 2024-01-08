const { NotesServicesInstance } = require('../../services/notes/notes-service');
const bodyValidation = require("../../utils/validations/index");

const createNoteController = async (req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await bodyValidation("createNote", body);
        const response = await NotesServicesInstance.createNote(validatedBody, req.user._id);
        res.send(response);
    } catch(error) {
        console.log("error in create note :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const updateNoteController = async (req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await bodyValidation("updateNote", body);
        const response = await NotesServicesInstance.updateNoteById(req.params.id, validatedBody);
        res.send(response);
    } catch(error) {
        console.log("error in update note :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getNoteByIdController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.getNoteById(req.params.id);
        res.send(response);
    } catch(error) {
        console.log("error in get note by id :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllNotesController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.getAllNotes();
        res.send(response);
    } catch(error) {
        console.log("error in get all notes :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllNotesForUserController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.getAllNotesForUser(req.user._id);
        res.send(response);
    } catch(error) {
        console.log("error in get all notes :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const deleteNoteByIdController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.deleteNoteById(req.params.id);
        res.send(response);
    } catch(error) {
        console.log("error in delete note :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const shareNoteWithUsersController = async (req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await bodyValidation("shareNote", body);
        const response = await NotesServicesInstance.shareNoteWithUsers(req.params.id, validatedBody);
        res.send(response);
    } catch(error) {
        console.log("error in share note with users :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const searchNotesByQueryController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.searchNotesByQuery(req.query.q);
        res.send(response);
    } catch(error) {
        console.log("error in search notes by query :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const searchNotesByQueryForUserController = async (req, res, next) => {
    try {
        const response = await NotesServicesInstance.searchNotesByQueryForUser(req.query.q, req.user._id);
        res.send(response);
    } catch(error) {
        console.log("error in search notes by query :- ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createNoteController,
    updateNoteController,
    getAllNotesController,
    getAllNotesForUserController,
    getNoteByIdController,
    deleteNoteByIdController,
    shareNoteWithUsersController,
    searchNotesByQueryController,
    searchNotesByQueryForUserController
}