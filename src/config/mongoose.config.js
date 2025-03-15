const { default: mongoose } = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to DB")
}).catch(err => {
    console.log(err?.message ?? "Failed DB connection")
})
