import User from "../models/user.model.js";
import jwt from "jsonwebtoken";





export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const isPasswordMatch = await user.comparePassword(password)

        if (!isPasswordMatch) {
            return res.status(422).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign(
            {
                _id: user._id,
                role: user.role

            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "User login suceesfully",
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })

        return res.status(200).json({
            success: true,
            message: "User logout successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            succes: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const changePassword = async (req, res) => {
    try {

        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }


        const compare = await user.comparePassword(oldPassword);

        if (!compare) {
            return res.status(422).json({
                success: false,
                message: "Incorrect old passwor"
            })
        }

        user.password = newPassword;
        await user.save();

        return res.status(200).json({
            succes: true,
            message: "Password updated successfully",
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: error.message
        })

    }
}
