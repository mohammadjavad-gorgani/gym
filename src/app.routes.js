const { Router } = require("express")
const { ClassRouter } = require("./modules/class/class.routes")
const { StudentRouter } = require("./modules/student/student.routes")
const { AttendanceRouter } = require("./modules/attendance/attendance.routes")

const mainRouter = Router()

mainRouter.use("/class", ClassRouter)
mainRouter.use("/student", StudentRouter)
mainRouter.use("/attendance", AttendanceRouter)

module.exports = mainRouter