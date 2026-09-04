import mongoose from "mongoose";
import dotenv from "dotenv";
import argon2 from "argon2";
import User from "./src/models/user.model.js";

dotenv.config();

const createAdmin = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        const existingAdmin = await User.findOne({
            role: "Admin"
        });

        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit(0);
        }

        const admin = await User.create({
            name: "Mohit Sharma",
            email: "iammohitpandit52@gmail.com",
            password:"mohitmohit52",
            role: "Admin"
        });

        console.log("Admin created successfully");
        console.log("Email:", admin.email);

        process.exit(0);

    } catch (error) {

        console.error("Admin creation failed:", error.message);

        process.exit(1);
    }
};

createAdmin();