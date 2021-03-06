const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model("User", {

    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        trim:true,
        lowercase:true,
        required:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid!")
            }
        }
    },
    password: {
        type: String,
        required:true,
        minlength:7,
        trim:true,
        validate(value) {
           if (validator.contains(value, "password")) {
               throw new Error("password cannot contains '/password/'")
           }

        }
    },
    age: {
        type: Number,
        default:0,
        validate(value) {
            if  (value < 0) {
                throw new Error("The value must be a positive number!")
            }
        } 
    }
})

module.exports = User