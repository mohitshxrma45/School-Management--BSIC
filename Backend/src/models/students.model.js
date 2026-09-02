import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        studentId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        studentClass: {
            type: String,
            required: true,
            trim: true
        },

        section: {
            type: String,
            required: true,
            trim: true,
            uppercase: true
        },

        rollNumber: {
            type: Number,
            unique: true,
            required: true
        },

        dateOfBirth: {
            type: Date
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"]
        },

        phone: {
            type: String,
            trim: true
        },

        address: {
            type: String,
            trim: true
        },

        guardianName: {
            type: String,
            trim: true
        },

        admissionDate: {
            type: Date,
            default: Date.now
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Students = mongoose.model("Students", studentSchema);

export default Students;