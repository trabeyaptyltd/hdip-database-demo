/**
 * Base Repository defines all generic functionality of the database operations.
 */
class BaseRepository {

    constructor(entityModel) {
        /** this defines the entity model and resolves automatically with implemented repository type */
        this.entityModel = entityModel;
    }

    /**
     * Generic Save Functionality
     * @param entity
     * @returns {Promise<*>}
     */
    async save(entity) {
        return await new this.entityModel(entity).save()
    }

    /**
     * Generic Update Functionality
     * @param entity
     * @returns {Promise<void>}
     */
    async update(entity) {
        console.log("Updating Object..", entity);
    }

    /**
     * Generic Find One Document Functionality
     * @param property
     * @param value
     * @returns {Promise<*>}
     */
    async findOne(property, value) {
        const entityModel = this.entityModel;
        let query = {}
        query[property] = value;
        return entityModel.findOne(query);
    }

    /**
     * Generic Find All Functionality
     * @returns {Promise<null>}
     */
    async findAll(){
        console.log("Finding All Objects..");
        return null;
    }
}

/** exporting base repository */
module.exports = BaseRepository;