const { Schema, model, Types } = require("mongoose")

const AttendanceSchema = new Schema({
    classId: { type: Types.ObjectId, ref: "class", required: true },
    studentId: { type: Types.ObjectId, ref: "student", required: true },
    present: { type: Boolean, default: true }
}, { timestamps: true });

const AttendanceModel = model("attendance", AttendanceSchema);
module.exports = AttendanceModel;
