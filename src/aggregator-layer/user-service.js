/** User is imported from the same layer */
const User = require('./user')

/** Repository Store is imported from database access layer. */
const RepositoryStore = require('./../database-access/repository-store')

/**
 * User Service is used to demonstrate the persistence of the user object.
 *
 * @type {{findUser: (function(*): Promise<*>), createUser: (function(*, *): Promise<*>)}}
 */
const UserService = {

    /**
     * Method defines the creation of a user and demonstration usage of save functionality in database. This operation
     * is independent of the type of the database used.
     *
     * @param name
     * @param email
     * @returns {Promise<*>}
     */
    createUser: async (name, email) => {
        let user = new User(name, email);
        return await RepositoryStore.UserRepository.save(user)
    },

    /**
     * Method defines the reading of a user and demonstration usage of read functionality in database. This operation
     * is independent of the type of the database used.
     *
     * @param name
     * @returns {Promise<*>}
     */
    findUser: async (name) => {
        return await RepositoryStore.UserRepository.findOne("name", name)
    }
}

/**
 * Exporting the user service for the usage in index.js which is the demo application trigger point
 *
 * @type {{findUser: (function(*): Promise<*>), createUser: (function(*, *): Promise<*>)}}
 */
module.exports = UserService;