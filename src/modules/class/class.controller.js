const autoBind = require("auto-bind");
const classService = require("./class.service")
const HttpCodes = require("http-codes");
const ClassMessage = require("./class.messages");

class ClassController {
    #service
    constructor() {
        autoBind(this)
        this.#service = classService
    }

    async create(req, res, next) {
        try {
            const { title, coachName, schedules } = req.body
            await this.#service.create({ title, coachName, schedules })
            return res.status(HttpCodes.CREATED).json({
                message: ClassMessage.Created
            })

        } catch (error) {
            next(error)
        }
    }

    async find(req, res, next) {
        try {
            const classes = await this.#service.find()
            return res.json(classes)

        } catch (error) {
            next(error)
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params
            const classSession = await this.#service.findById(id)
            return res.json(classSession)

        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params
            await this.#service.remove(id)
            return res.json({
                message: ClassMessage.Deleted
            })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ClassController()