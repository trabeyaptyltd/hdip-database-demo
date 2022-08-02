const mongoose = require('../config/mongoose');
const {Schema} = mongoose;

/** Defining the user model schema */
const UserSchema = new Schema(
    {
        name: String,
        email: String,
    },
    {timestamps: true}
)

/** Defining the user model */
const User = mongoose.model('User', UserSchema)

/** Exporting the user model only for the usage within database layer */
module.exports = User