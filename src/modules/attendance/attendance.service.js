const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const AttendanceModel = require("./attendance.model");
const AttendanceMessage = require("./attendance.messages");

class AttendanceService {
    #model
    constructor() {
        autoBind(this)
        this.#model = AttendanceModel
    }

    async create(attendanceDto) {
        attendanceDto.students = JSON.parse(attendanceDto.students)
        const attendanceRecords = attendanceDto.students.map(student => ({
            classId: attendanceDto.classId,
            studentId: student.studentId,
            present: student.present ?? true
        }))
        return await this.#model.insertMany(attendanceRecords)
    }

}

module.exports = new AttendanceService()