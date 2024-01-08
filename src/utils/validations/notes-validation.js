const joi = require("joi");
joi.objectId = require('joi-objectid')(joi);

class NotesValidation {
    constructor() {
        this.notesCreateValidationSchema = joi.object({
            title: joi.string().trim().min(4).max(255).required(),
            content: joi.string().required(),
            writtenBy: joi.objectId()
        });

        this.notesUpdateValidationSchema = joi.object({
            title: joi.string().trim().min(4).max(255).optional(),
            content: joi.string().optional(),
            sharedWith: joi.objectId().optional()
        });

        this.notesShareValidationSchema = joi.object({
            sharedWith: joi.array().items(joi.objectId().required()),
        });
    };
};

const notesValidationObject = new NotesValidation();

module.exports = notesValidationObject;