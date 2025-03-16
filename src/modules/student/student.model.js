const { Schema, Types, model } = require("mongoose")

const StudentSchema = new Schema({
    name: { type: String, required: true },
    family: { type: String, required: true },
    age: Number,
    belt: { type: String, enum: ["سفید", "زرد", "سبز", "آبی", "قهوه ای", "مشکی"], required: true, default: "سفید" },
    membershipDate: { type: Date, default: Date.now },
    phoneNumber: { type: String, required: true },
    class: { type: Types.ObjectId, ref: "classe", required: true },
    attendances: [{ type: Types.ObjectId, ref: "attendance" }],
    payments: [{ type: Types.ObjectId, ref: "payment" }],
    purchases: [{ type: Types.ObjectId, ref: "purchase" }]
}, { timestamps: true })

const StudentModel = model("student", StudentSchema)

module.exports = StudentModel