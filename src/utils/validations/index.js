const authValidationObject = require('./auth-validation');
const notesValidationObject = require('./notes-validation');

const validation = (validationType, data) => {
    switch (validationType) {
        case "userSignup": return authValidationObject.userSignupValidationSchema.validateAsync(data, { abortEarly: false });
        case "userLogin" : return authValidationObject.userLoginValidationSchema.validateAsync(data, {abortEarly: false});

        case "createNote": return notesValidationObject.notesCreateValidationSchema.validateAsync(data, {abortEarly: false});
        case "updateNote": return notesValidationObject.notesUpdateValidationSchema.validateAsync(data, {abortEarly : false});
        case "shareNote": return notesValidationObject.notesShareValidationSchema.validateAsync(data, {abortEarly: false});
        
        default: return "case not found!"
    }
};

module.exports = validation;