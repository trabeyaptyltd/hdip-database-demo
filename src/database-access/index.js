/**
 * This file defines the exports from the database access layer.
 */

/**
 * @type {Readonly<{UserRepository: UserRepository}>}
 */
const RepositoryStore = require('./repository-store')

/** Exporting repository store for the external usage. */
module.exports = {
    RepositoryStore
}