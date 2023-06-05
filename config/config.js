require('dotenv').config()

module.exports = {

  PORT: process.env.PORT,
  USER_NAME: process.env.USER_NAME,
  USER_PASSWORD: process.env.USER_PASSWORD,
  MONGO_URI: process.env.MONGO_URI

}
