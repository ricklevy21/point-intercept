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

UserSchema.methods = {
    checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
    }
  }

// Define pre-hooks for the save method
UserSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.hashPassword(this.password)
      next()
    }
  })


const User = mongoose.model("User", UserSchema);

module.exports = User;