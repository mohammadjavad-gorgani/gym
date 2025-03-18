const { Schema, Types, model } = require("mongoose")

const PaymentSchema = new Schema({
    studentId: { type: Types.ObjectId, ref: "student", required: true },
    amount: { type: Number, required: true, default: 200000 },
    date: { type: Date, default: Date.now },
    month: { type: String, required: true }, // 04-01
    method: { type: String, enum: ["نقدی", "کارت به کارت"], default: "کارت به کارت" },
    note: String
}, { timestamps: true })

const PaymentModel = model("payment", PaymentSchema)

module.exports = PaymentModel