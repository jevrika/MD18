const {default: mongoose} = require("mongoose");

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.log(error)
  }
}