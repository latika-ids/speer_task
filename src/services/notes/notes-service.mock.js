// speer_task/src/services/notes/notes-services.mock.js
const sinon = require('sinon');

class NotesServicesMock {
    async createNote() {
        return Promise.resolve({ _id: 'mocked_note_id', title: 'Mocked Note', content: 'This is a mocked note', writtenBy: 'user_id' });
    }

    async updateNoteById() {
        return Promise.resolve({ _id: 'mocked_note_id', title: 'Mocked Updated Note', content: 'This is a mocked updated note', writtenBy: 'user_id' });
    }

    async getAllNotes() {
        return Promise.resolve([
            { _id: 'note_id_1', title: 'Mocked Note 1', content: 'This is a mocked note', writtenBy: 'user_id' },
            { _id: 'note_id_2', title: 'Mocked Note 2', content: 'This is another mocked note', writtenBy: 'user_id' },
        ]);
    }

    async getAllNotesForUser() {
        return Promise.resolve([
            { _id: 'note_id_1', title: 'Mocked Note 1', content: 'This is a mocked note', writtenBy: 'user_id' },
            { _id: 'note_id_2', title: 'Mocked Note 2', content: 'This is another mocked note', writtenBy: 'user_id' },
        ]);
    }

    async getNoteById() {
        return Promise.resolve({ _id: 'mocked_note_id', title: 'Mocked Note', content: 'This is a mocked note', writtenBy: 'user_id' });
    }

    async deleteNoteById() {
        return Promise.resolve({ _id: 'mocked_note_id', title: 'Mocked Note', content: 'This is a mocked note', writtenBy: 'user_id' });
    }

    async shareNoteWithUsers() {
        return Promise.resolve({ _id: 'mocked_note_id', title: 'Mocked Note', content: 'This is a mocked note', writtenBy: 'user_id', sharedWith: ['user1_id', 'user2_id'] });
    }

    async searchNotesByQuery() {
        return Promise.resolve([
            { _id: 'note_id_1', title: 'Mocked Note 1', content: 'This is a mocked note', writtenBy: 'user_id' },
            { _id: 'note_id_2', title: 'Mocked Note 2', content: 'This is another mocked note', writtenBy: 'user_id' },
        ]);
    }

    async searchNotesByQueryForUser() {
        return Promise.resolve([
            { _id: 'note_id_1', title: 'Mocked Note 1', content: 'This is a mocked note', writtenBy: 'user_id' },
            { _id: 'note_id_2', title: 'Mocked Note 2', content: 'This is another mocked note', writtenBy: 'user_id' },
        ]);
    }
}

const notesServicesMockInstance = new NotesServicesMock();

module.exports = {
    notesServicesMockInstance,
};
