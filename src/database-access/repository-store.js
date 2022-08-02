const UserRepository = require('./mongodb/repository/user-repository')

/**
 * Repository store is to hold all available repositories. it acts as a generic layer for all repositories and reduces
 * the coupling between actual repositories and the usage.
 *
 * @type {Readonly<{UserRepository: UserRepository}>}
 */
const RepositoryStore = Object.freeze({
    UserRepository : new UserRepository()
})

/**
 * Exporting the repository for external usage.
 *
 * @type {Readonly<{UserRepository: UserRepository}>}
 */
module.exports = RepositoryStore;