const Notes = require('../../models/notes');
const mongoose = require("mongoose");

class NotesServices {
    async createNote(body, userId) {
        try {
            const noteBody = {
                title: body.title,
                content: body.content,
                writtenBy: userId
            }
            let note = new Notes(noteBody);
            await note.save();
            return note;
        } catch (error) {
            throw error;
        }
    }

    async updateNoteById(noteId, body) {
        try {
            const updatedNote = await Notes.findByIdAndUpdate({ _id: noteId }, body);
            return updatedNote;
        } catch (error) {
            throw error;
        }
    }

    async getAllNotes() {
        try {
            const notes = await Notes.find();
            return notes;
        } catch (error) {
            throw error;
        }
    }

    async getAllNotesForUser(userId) {
        try {
            const notes = await Notes.find({ writtenBy: userId });
            return notes;
        } catch (error) {
            throw error;
        }
    }

    async getNoteById(noteId) {
        try {
            const note = await Notes.findById({ _id: noteId });
            return note;
        } catch (error) {
            throw error;
        }
    }

    async deleteNoteById(noteId) {
        try {
            const deletedNote = await Notes.findByIdAndDelete({ _id: noteId });
            return deletedNote;
        } catch (error) {
            throw error;
        }
    }

    async shareNoteWithUsers(noteId, userIds) {
        try {
            const updatedNote = await Notes.findByIdAndUpdate(
                { _id: noteId },
                { $addToSet: { sharedWith: { $each: userIds.sharedWith } } },
                { new: true }
            );
            return updatedNote;
        } catch (error) {
            throw error;
        }
    }

    async searchNotesByQuery(query) {
        try {
            const notes = await Notes.find(
                { $text: { $search: query, $caseSensitive : false } },
                { title: 1, content: 1 }
            )
            .exec();
            return notes;
        } catch (error) {
            throw error;
        }
    }

    async searchNotesByQueryForUser(query, userId) {
        try {
            console.log(userId);
            const user = await Notes.find({writtenBy : userId});
            console.log(user);
            const notes = await Notes.find(
                {
                writtenBy: userId,
                $text: { $search: query }
                },
                { title: 1, content: 1 }
            )
            console.log(notes);
            return notes;
        } catch (error) {
            throw error;
        }
    }
}

exports.NotesServicesInstance = new NotesServices();