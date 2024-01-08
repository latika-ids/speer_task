const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  writtenBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sharedWith: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }],
}, { timestamps: true });

notesSchema.index({ title: 'text', content : 'text' }, { default_language: "none" });

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;