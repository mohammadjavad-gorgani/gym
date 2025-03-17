const { Router } = require("express")
const attendanceController = require("./attendance.controller")

const router = Router()

router.post("/", attendanceController.create)

module.exports = {
    AttendanceRouter: router
}