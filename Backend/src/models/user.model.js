import mongoose from 'mongoose'
import argon2 from 'argon2'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ["Student", "Teacher", "Admin"],
        default: "Student"
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    this.password = await argon2.hash(this.password);


});

userSchema.methods.comparePassword = async function (password) {
    return await argon2.verify(this.password, password)
}

const User = mongoose.model("User", userSchema)
export default User;