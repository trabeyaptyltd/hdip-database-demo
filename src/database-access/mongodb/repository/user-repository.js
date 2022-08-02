const BaseRepository = require('./base-repository')
const UserModel = require('../model/user-model')

/**
 * User Repository defines all generic and custom functionality of database operations of the User Module.
 */
class UserRepository extends BaseRepository {

    constructor() {
        /** Resolving the entity type of the user repository which is User Model */
        super(UserModel);
    }

    /**
     * Reset Password is a demo custom functionality of the reset user password.
     * @param newPassword
     */
    resetUserPassword = (newPassword) => {
        console.log("Resetting User Password..")
    }
}

/** Exporting user repository */
module.exports = UserRepository;