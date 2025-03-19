const autoBind = require("auto-bind")
const studentService = require("./student.service")
const HttpCodes = require("http-codes");
const StudentMessage = require("./student.messages");

class StudentController {
    #service

    constructor() {
        autoBind(this)
        this.#service = studentService
    }

    async create(req, res, next) {
        try {
            const { name, family, age, belt, membershipDate, phoneNumber, class: classSession } = req.body
            await this.#service.create({ name, family, age, belt, membershipDate, phoneNumber, class: classSession })
            return res.status(HttpCodes.CREATED).json({
                message: StudentMessage.Created
            })
        } catch (error) {
            next(error)
        }
    }

    async find(req, res, next) {
        try {
            const students = await this.#service.find()
            return res.json(students)
        } catch (error) {
            next(error)
        }
    }

    async report(req, res, next) {
        try {
            const { id } = req.params
            const report = await this.#service.report(id)
            return res.json(report)
        } catch (error) {
            next(error)
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params
            const student = await this.#service.findById(id)
            return res.json(student)

        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const { name, family, age, belt, phoneNumber, class: classId, membershipDate } = req.body;
            const { id } = req.params;
            await this.#service.update(id, { name, family, age, belt, phoneNumber, class: classId, membershipDate });
            return res.json({
                message: StudentMessage.Updated
            });
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params
            await this.#service.remove(id)
            return res.json({
                message: StudentMessage.Deleted
            })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new StudentController()