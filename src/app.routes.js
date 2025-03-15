const { Router } = require("express")
const { ClassRouter } = require("./modules/class/class.routes")

const mainRouter = Router()

mainRouter.use("/class", ClassRouter)

module.exports = mainRouter