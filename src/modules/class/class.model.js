const { Schema, model, Types } = require("mongoose")

const ClassSchema = new Schema({
    title: { type: String, required: true },
    coachName: { type: String, required: true },
    schedules: {
        type: [
            {
                day: { type: String, enum: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"], required: true },
                startTime: { type: String, required: true },
                endTime: { type: String, required: true }
            }
        ],
        required: true
    },
    students: [{ type: Types.ObjectId, ref: "student", required: false }]
}, { timestamps: true })

const ClassModel = model("classe", ClassSchema)

module.exports = ClassModel