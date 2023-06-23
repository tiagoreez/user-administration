const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  gender: String,
  status: String,
  createdAt: mongoose.SchemaTypes.Date

})

const Userdb = mongoose.model('users', schema)

module.exports = Userdb
