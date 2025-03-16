const { Router } = require("express");
const studentController = require("./student.controller");

const router = Router()

router.post("/", studentController.create)
router.get("/", studentController.find)
router.put("/:id", studentController.update)
router.get("/:id", studentController.findById)
router.delete("/:id", studentController.remove)

module.exports = {
    StudentRouter: router
}