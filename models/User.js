const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

//define the schema for the user colelciton in the db
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },                  
    password: {
        type: String,
        required: true
    }                                
});

// //method to gen a salt and hash the pw
// usersSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

// //method to compare the password
// usersSchema.methods.validPassword = function(password, encrypted) {
//     return bcrypt.compareSync(password, encrypted);
// }

const User = mongoose.model("User", UserSchema);

module.exports = User;