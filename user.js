const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model

const userSchema = new Schema(
  {
    username: String,
    password: String, 
    email: String,
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tweet",
        default: []
      }
    ],
  }
)


const User = model("User", userSchema)

module.exports = User;