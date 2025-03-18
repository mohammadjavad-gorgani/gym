const autoBind = require("auto-bind")
const HttpCodes = require("http-codes")
const paymentService = require("./payment.service")
const PaymentMessage = require("./payment.messages")

class PaymentController {
    #service
    constructor() {
        autoBind(this)
        this.#service = paymentService
    }

    async create(req, res, next) {
        try {
            const { studentId, amount, date, month, method, note } = req.body
            await this.#service.create({ studentId, amount: +amount, date, month, method, note })
            return res.status(HttpCodes.CREATED).json({
                message: PaymentMessage.Created
            })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new PaymentController()