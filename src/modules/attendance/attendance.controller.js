const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const attendanceService = require("./attendance.service");
const AttendanceMessage = require("./attendance.messages");

class AttendanceController {
    #service
    constructor() {
        autoBind(this)
        this.#service = attendanceService
    }

    async create(req, res, next) {
        try {
            const { classId, students } = req.body
            await this.#service.create({ classId, students })
            return res.status(HttpCodes.CREATED).json({
                message: AttendanceMessage.Created
            })
        } catch (error) {
            next(error)
        }
    }

    async findByStudentId(req, res, next) {
        try {
            const { id } = req.params
            const studentAttendances = await this.#service.findByStudentId(id)
            return res.json(studentAttendances)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AttendanceController()