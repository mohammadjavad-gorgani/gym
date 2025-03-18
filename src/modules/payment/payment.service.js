const autoBind = require("auto-bind")
const PaymentModel = require("./payment.model")
const StudentModel = require("../student/student.model")
const { isValidObjectId } = require("mongoose")
const createHttpError = require("http-errors")
const StudentMessage = require("../student/student.messages")


class PaymentService {
    #model
    #studentModel
    constructor() {
        autoBind(this)
        this.#model = PaymentModel
        this.#studentModel = StudentModel
    }

    async create(paymentDto) {
        if (!paymentDto.studentId || !isValidObjectId(paymentDto.studentId)) {
            throw new createHttpError.BadRequest("Invalid or missing studentId")
        }
        if (!paymentDto.amount || typeof paymentDto.amount !== 'number') {
            throw new createHttpError.BadRequest("Invalid or missing amount")
        }
        if (!paymentDto.month || typeof paymentDto.month !== 'string') {
            throw new createHttpError.BadRequest("Invalid or missing month")
        }

        const student = await this.#studentModel.findById(paymentDto.studentId)
        if (!student) {
            throw new createHttpError.NotFound(StudentMessage.NotFound)
        }

        const payment = await this.#model.create(paymentDto)
        // First Method:
        // student.payments.push(payment._id);
        // await student.save();
        // Second Method:
        await student.updateOne({ $push: { payments: payment._id } })

        return payment
    }

}

module.exports = new PaymentService()