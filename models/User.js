const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the schema for the user colelciton in the db
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },                  
    password: {
        type: String,
        required: true
    }                                
});

const User = mongoose.model("User", UserSchema);

module.exports = User;