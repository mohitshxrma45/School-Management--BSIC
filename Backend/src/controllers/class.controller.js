import Class from "../models/class.model.js";


export const createClass = async (req, res) => {

    try {

        const { className } = req.body;

        const isExist = await Class.findOne({ className });

        if (isExist) {
            return res.status(422).json({
                success: false,
                message: "Class Already Exists"
            })
        }

        const classNumber = await Class.create({
            className
        })

        return res.status(201).json({
            success: true,
            message: "Class created successfully",
            classNumber
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getClass = async (req, res) => {
    try {

        const totalClass = await Class.find();

        return res.status(200).json({
            success: true,
            message: "All classes fetched successfully ",
            totalClass
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}