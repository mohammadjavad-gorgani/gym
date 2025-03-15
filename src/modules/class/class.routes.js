const { Router } = require("express")
const classController = require("./class.controller")

const router = Router()

router.post("/", classController.create)
router.get("/", classController.find)
router.get("/:id", classController.findById)
router.delete("/:id", classController.remove)

module.exports = {
    ClassRouter: router
}