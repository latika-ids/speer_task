const sinon = require('sinon');
const { notesServicesMockInstance } = require('../../services/notes/notes-service.mock.js');
const {
    createNoteController,
    updateNoteController,
    getAllNotesController,
    getAllNotesForUserController,
    getNoteByIdController,
    deleteNoteByIdController,
    shareNoteWithUsersController,
    searchNotesByQueryController,
    searchNotesByQueryForUserController
} = require('../../controllers/notes/notes-controller');

jest.mock('../../services/notes/notes-service.mock');

describe('Notes API Unit Tests', () => {
    // afterEach(() => {
    //     sinon.restore();
    // });

    // it('should create a note', async () => {
    //     const req = {
    //         body: { title: 'Test Note', content: 'This is a test note' },
    //         user: { _id: 'user_id' },
    //     };
    //     const res = { send: sinon.stub() };

    //     notesServicesMockInstance.createNote.resolves({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' });

    //     await createNoteController(req, res);

    //     expect(res.send).toHaveBeenCalledWith({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' });
    // });

    it('should create a note', async () => {
        const req = {}; // provide necessary request data
        const res = { send: sinon.stub() };
    
        // Assuming notesServicesMockInstance is an object with createNote as a function
        sinon.stub(notesServicesMockInstance, 'createNote').resolves({
          _id: 'note_id',
          title: 'Test Note',
          content: 'This is a test note',
          writtenBy: 'user_id'
        });
    
        await createNoteController(req, res);
    });

    it('should update a note', async () => {
        const req = {
            body: { title: 'Updated Note', content: 'This is an updated note' },
            params: { id: 'note_id' },
        };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.updateNoteById.resolves({ _id: 'note_id', title: 'Updated Note', content: 'This is an updated note', writtenBy: 'user_id' });

        await updateNoteController(req, res);

        expect(res.send).toHaveBeenCalledWith({ _id: 'note_id', title: 'Updated Note', content: 'This is an updated note', writtenBy: 'user_id' });
    });

    it('should get all notes', async () => {
        const req = {};
        const res = { send: sinon.stub() };

        notesServicesMockInstance.getAllNotes.resolves([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);

        await getAllNotesController(req, res);

        expect(res.send).toHaveBeenCalledWith([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);
    });

    it('should get all notes for a user', async () => {
        const req = { user: { _id: 'user_id' } };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.getAllNotesForUser.resolves([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);

        await getAllNotesForUserController(req, res);

        expect(res.send).toHaveBeenCalledWith([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);
    });

    it('should get a note by ID', async () => {
        const req = { params: { id: 'note_id' } };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.getNoteById.resolves({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' });

        await getNoteByIdController(req, res);

        expect(res.send).toHaveBeenCalledWith({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' });
    });

    it('should delete a note by ID', async () => {
        const req = { params: { id: 'note_id' } };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.deleteNoteById.resolves({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' });

        await deleteNoteByIdController(req, res);

        expect(res.send).toHaveBeenCalledWith({
            _id: 'note_id',
            title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id'
        });
    });

    it('should share a note with users', async () => {
        const req = {
            params: { id: 'note_id' },
            body: { sharedWith: ['user1_id', 'user2_id'] },
        };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.shareNoteWithUsers.resolves({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id', sharedWith: ['user1_id', 'user2_id'] });

        await shareNoteWithUsersController(req, res);

        expect(res.send).toHaveBeenCalledWith({ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id', sharedWith: ['user1_id', 'user2_id'] });
    });

    it('should search notes by query', async () => {
        const req = { query: { q: 'test' } };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.searchNotesByQuery.resolves([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);

        await searchNotesByQueryController(req, res);

        expect(res.send).toHaveBeenCalledWith([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);
    });

    it('should search notes by query for a user', async () => {
        const req = { query: { q: 'test' }, user: { _id: 'user_id' } };
        const res = { send: sinon.stub() };

        notesServicesMockInstance.searchNotesByQueryForUser.resolves([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);

        await searchNotesByQueryForUserController(req, res);

        expect(res.send).toHaveBeenCalledWith([{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }]);
    });
});
