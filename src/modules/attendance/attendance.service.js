const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const AttendanceModel = require("./attendance.model");
const AttendanceMessage = require("./attendance.messages");
const ClassModel = require("../class/class.model");
const { isValidObjectId } = require("mongoose");
const ClassMessage = require("../class/class.messages");
const StudentMessage = require("../student/student.messages");
const StudentModel = require("../student/student.model");

class AttendanceService {
    #model
    #classModel
    #studentModel
    constructor() {
        autoBind(this)
        this.#model = AttendanceModel
        this.#classModel = ClassModel
        this.#studentModel = StudentModel
    }

    async create(attendanceDto) {
        if (attendanceDto?.classId && isValidObjectId(attendanceDto.classId)) {
            if (await this.checkExistByClassId(attendanceDto.classId)) {
                let students = attendanceDto.students;
                if (typeof students === 'string') {
                    students = JSON.parse(students);
                }

                if (!Array.isArray(students)) {
                    throw new createHttpError.BadRequest("students should be an array");
                }
                const attendanceRecords = await Promise.all(students.map(async (student) => {
                    if (student?.studentId && isValidObjectId(student.studentId)) {
                        if (await this.checkExistByStudentId(student.studentId)) {
                            return {
                                classId: attendanceDto.classId,
                                studentId: student.studentId,
                                present: student.present ?? true
                            }
                        }
                    } else {
                        throw new createHttpError.BadRequest("studentId is wrong")
                    }
                }))
                return await this.#model.insertMany(attendanceRecords)
            }
        } else {
            throw new createHttpError.BadRequest("classId is wrong or missing")
        }
    }

    async findByStudentId(studentId) {
        if (studentId && isValidObjectId(studentId)) {
            if (await this.checkExistByStudentId(studentId))
                return await this.#model.find({ studentId }, { __v: 0 }).populate({
                    path: 'studentId',
                    select: 'name family -_id'
                })
        } else {
            throw new createHttpError.BadRequest("studentId is wrong or missing")
        }
    }

    async checkExistByClassId(classId) {
        const classSession = await this.#classModel.findById(classId)
        if (!classSession) throw new createHttpError.NotFound(ClassMessage.NotFound)
        return true
    }

    async checkExistByStudentId(studentId) {
        const student = await this.#studentModel.findById(studentId)
        if (!student) throw new createHttpError.NotFound(StudentMessage.NotFound)
        return true
    }

}

module.exports = new AttendanceService()