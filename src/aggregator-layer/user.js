/**
 * User is a sample class used to demonstrate the usage of the database. User class is a plain Javascript class
 * used to hold user information which is completely decoupled from its domain object UserModel.js
 */
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

/**
 * Exporting user only for the usage in aggregator layer.
 * @type {User}
 */
module.exports = User;
