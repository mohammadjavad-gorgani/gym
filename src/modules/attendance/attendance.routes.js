const { Router } = require("express")
const attendanceController = require("./attendance.controller")

const router = Router()

router.post("/", attendanceController.create)
router.get("/:id", attendanceController.findByStudentId)

module.exports = {
    AttendanceRouter: router
}