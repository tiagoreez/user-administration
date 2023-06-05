const mongoose = require('mongoose')
const config = require('../../config/config')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`mongo connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
