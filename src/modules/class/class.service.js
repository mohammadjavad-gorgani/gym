const autoBind = require("auto-bind");
const ClassModel = require("./class.model");
const { isValidObjectId } = require("mongoose");
const createHttpError = require("http-errors");
const ClassMessage = require("./class.messages");

class ClassService {
    #model
    constructor() {
        autoBind(this)
        this.#model = ClassModel
    }

    async create(classDto) {
        const schedules = JSON.parse(classDto.schedules)
        classDto.schedules = schedules
        const classSession = await this.#model.create(classDto)
        return classSession
    }

    async find() {
        return await this.#model.find({}, { __v: 0, "schedules._id": 0 })
    }

    async findById(id) {
        if (isValidObjectId(id)) {
            const classSession = await this.#model.findById(id, { __v: 0, "schedules._id": 0 })
            if (!classSession) throw new createHttpError.NotFound(ClassMessage.NotFound)
            return classSession
        } else {
            throw new createHttpError.Conflict(ClassMessage.InCorrectId)
        }
    }

    async remove(id) {
        if (isValidObjectId(id)) {
            const classSession = await this.#model.findById(id)
            if (!classSession) throw new createHttpError.NotFound(ClassMessage.NotFound)
            return await this.#model.deleteOne({ _id: id })
        } else {
            throw new createHttpError.Conflict(ClassMessage.InCorrectId)
        }
    }
}

module.exports = new ClassService()