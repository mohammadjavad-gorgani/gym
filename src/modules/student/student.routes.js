const { Router } = require("express");

const router = Router()

router.get("/", (req, res, next) => {
    res.json({
        message: "get all students"
    })
})

module.exports = {
    StudentRouter: router
}