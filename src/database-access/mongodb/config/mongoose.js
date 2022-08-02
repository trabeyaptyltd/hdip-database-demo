/**
 * This module acts as the connection to MongoDB using Mongoose. Connection to MongoDB is exported externally for
 * all database connectivity usages.
 *
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both
 * promises and callbacks.
 */

/** External library Mongoose is imported for database connectivity purpose */
const mongoose = require('mongoose')

/**
 * Connection String is defined here only for the demonstrations purposes.
 * @type {string}
 */
const DB_URL = "mongodb+srv://user:user@cluster0.epjkd.mongodb.net/hdip-test?retryWrites=true&w=majority";

/**
 * Configuration of the mongoose
 */
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.error(error))

mongoose.connection.on('open', () => console.info('MongoDB connected'))

/** Exporting mongoose object with database connection */
module.exports = mongoose
