// speer_task/src/tests/integration-tests/notes-integration.test.js
const request = require('supertest');
const app = require('../../server');
const { notesServicesMockInstance } = require('../../services/notes/notes-service.mock');

jest.mock('../../services/notes/notes-service.mock');

describe('Notes API Integration Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new note', async () => {
    const mockNote = {
      _id: 'note_id',
      title: 'Test Note',
      content: 'This is a test note',
      writtenBy: 'user_id',
    };
    notesServicesMockInstance.createNote.mockResolvedValueOnce(mockNote);

    const response = await request(app)
      .post('/notes/create')
      .send({ title: 'Test Note', content: 'This is a test note' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNote);
    expect(notesServicesMockInstance.createNote).toHaveBeenCalled();
  });

  it('should update a note', async () => {
    const mockUpdatedNote = {
      _id: 'note_id',
      title: 'Updated Note',
      content: 'This is an updated note',
      writtenBy: 'user_id',
    };
    notesServicesMockInstance.updateNoteById.mockResolvedValueOnce(mockUpdatedNote);

    const response = await request(app)
      .put('/notes/update/note_id')
      .send({ title: 'Updated Note', content: 'This is an updated note' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUpdatedNote);
    expect(notesServicesMockInstance.updateNoteById).toHaveBeenCalled();
  });

  it('should get all notes', async () => {
    const mockNotes = [{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }];
    notesServicesMockInstance.getAllNotes.mockResolvedValueOnce(mockNotes);

    const response = await request(app).get('/notes/getAll');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNotes);
    expect(notesServicesMockInstance.getAllNotes).toHaveBeenCalled();
  });

  it('should get all notes for a user', async () => {
    const mockNotesForUser = [{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }];
    notesServicesMockInstance.getAllNotesForUser.mockResolvedValueOnce(mockNotesForUser);

    const response = await request(app).get('/notes/getAllByUser');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNotesForUser);
    expect(notesServicesMockInstance.getAllNotesForUser).toHaveBeenCalled();
  });

  it('should get a note by ID', async () => {
    const mockNoteById = { _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' };
    notesServicesMockInstance.getNoteById.mockResolvedValueOnce(mockNoteById);

    const response = await request(app).get('/notes/get/note_id');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNoteById);
    expect(notesServicesMockInstance.getNoteById).toHaveBeenCalled();
  });

  it('should delete a note by ID', async () => {
    const mockDeletedNote = { _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' };
    notesServicesMockInstance.deleteNoteById.mockResolvedValueOnce(mockDeletedNote);

    const response = await request(app).delete('/notes/delete/note_id');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockDeletedNote);
    expect(notesServicesMockInstance.deleteNoteById).toHaveBeenCalled();
  });

  it('should share a note with users', async () => {
    const mockSharedNote = {
      _id: 'note_id',
      title: 'Test Note',
      content: 'This is a test note',
      writtenBy: 'user_id',
      sharedWith: ['user1_id', 'user2_id'],
    };
    notesServicesMockInstance.shareNoteWithUsers.mockResolvedValueOnce(mockSharedNote);

    const response = await request(app)
      .post('/notes/share/note_id')
      .send({ sharedWith: ['user1_id', 'user2_id'] });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockSharedNote);
    expect(notesServicesMockInstance.shareNoteWithUsers).toHaveBeenCalled();
  });

  it('should search notes by query', async () => {
    const mockSearchedNotes = [{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }];
    notesServicesMockInstance.searchNotesByQuery.mockResolvedValueOnce(mockSearchedNotes);

    const response = await request(app).get('/notes/search?q=test');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockSearchedNotes);
    expect(notesServicesMockInstance.searchNotesByQuery).toHaveBeenCalled();
  });

  it('should search notes by query for a user', async () => {
    const mockSearchedNotesForUser = [{ _id: 'note_id', title: 'Test Note', content: 'This is a test note', writtenBy: 'user_id' }];
    notesServicesMockInstance.searchNotesByQueryForUser.mockResolvedValueOnce(mockSearchedNotesForUser);

    const response = await request(app).get('/notes/searchByUser?q=test');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockSearchedNotesForUser);
    expect(notesServicesMockInstance.searchNotesByQueryForUser).toHaveBeenCalled();
  });
});