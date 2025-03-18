const { Router } = require("express")
const paymentController = require("./payment.controller")

const router = Router()

router.post("/", paymentController.create)

module.exports = {
    PaymentRouter: router
}