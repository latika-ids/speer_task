const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../../config/app-config")

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    userName: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Enter correct email!");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    }
}, {timestamps: true});

usersSchema.methods.generateAuthToken = async function () {
      const user = this;
      const token = jwt.sign({ _id: user._id.toString(), email: user.email }, JWT_KEY, {
        expiresIn: '7200s',
    });
      return token;
}

usersSchema.statics.findByCredentials = async (email, password) => {
    try {
      let user = await Users.findOne({ email });
  
      if (!user) {
        throw new Error('Unable to login');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        throw new Error('Unable to login');
      }
  
      return user;
    } catch (error) {
        console.log("error", error);
      throw new Error('Unable to login');
    }
  };
  

usersSchema.pre("save", async function (next)  {
    const user = this;

    if(user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    };

    next();

})

const Users = mongoose.model('users', usersSchema);
module.exports = Users;