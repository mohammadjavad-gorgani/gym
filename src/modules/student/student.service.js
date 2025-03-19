const autoBind = require("auto-bind")
const StudentModel = require("./student.model")
const ClassModel = require("../class/class.model")
const createHttpError = require("http-errors")
const StudentMessage = require("./student.messages")
const ClassMessage = require("../class/class.messages")
const { isValidObjectId } = require("mongoose")
const AttendanceModel = require("../attendance/attendance.model")

class StudentService {
    #model
    #classModel
    #attendanceModel
    constructor() {
        autoBind(this)
        this.#model = StudentModel
        this.#classModel = ClassModel
        this.#attendanceModel = AttendanceModel
    }

    async create(studentDto) {
        const student = await this.#model.create(studentDto)
        const classSession = await this.#classModel.findById(studentDto.class)
        if (!classSession) throw new createHttpError.NotFound(ClassMessage.NotFound)
        await classSession.updateOne({ $push: { students: student._id } })
        // await this.#classModel.updateOne({ _id: studentDto.class },
        //     {
        //         $push: { students: student._id }
        //     })
        return student
    }

    async find() {
        return await this.#model.find({}, { __v: 0 }).populate({
            path: 'class',
            select: 'title coachName -_id'
        });
    }

    async report(studentId) {
        const student = await this.#model.findById(studentId).populate("payments class")
        const attendance = await this.#attendanceModel.find({ studentId })
        return {
            student,
            attendance
        }
    }

    async findById(id) {
        if (isValidObjectId(id)) {
            const student = await this.#model.findById(id, { __v: 0 })
            if (!student) throw new createHttpError.NotFound(StudentMessage.NotFound)
            return student
        } else {
            throw new createHttpError.Conflict(ClassMessage.InCorrectId)
        }
    }

    async update(studentId, studentDto) {
        const student = await this.#model.findById(studentId);
        if (!student) throw new createHttpError.NotFound(StudentMessage.NotFound);

        if (studentDto.class && studentDto.class !== student.class.toString()) {
            const oldClass = await this.#classModel.findById(student.class);
            const newClass = await this.#classModel.findById(studentDto.class);

            if (!newClass) throw new createHttpError.NotFound(ClassMessage.NotFound);

            await this.#classModel.updateOne({ _id: oldClass._id }, { $pull: { students: student._id } });
            await this.#classModel.updateOne({ _id: newClass._id }, { $push: { students: student._id } });
        }

        return await this.#model.updateOne({ _id: studentId }, { $set: studentDto });
    }

    async remove(id) {
        if (isValidObjectId(id)) {
            const student = await this.#model.findById(id)
            if (!student) throw new createHttpError.NotFound(StudentMessage.NotFound)
            await this.#classModel.updateOne({ _id: student.class }, { $pull: { students: student._id } })
            return await this.#model.deleteOne({ _id: id })
        } else {
            throw new createHttpError.Conflict(ClassMessage.InCorrectId)
        }
    }

}

module.exports = new StudentService()