const { Router } = require("express")
const { ClassRouter } = require("./modules/class/class.routes")
const { StudentRouter } = require("./modules/student/student.routes")
const { AttendanceRouter } = require("./modules/attendance/attendance.routes")
const { PaymentRouter } = require("./modules/payment/payment.routes")

const mainRouter = Router()

mainRouter.use("/class", ClassRouter)
mainRouter.use("/student", StudentRouter)
mainRouter.use("/attendance", AttendanceRouter)
mainRouter.use("/payment", PaymentRouter)

module.exports = mainRouter