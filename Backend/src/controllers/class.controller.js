import Class from "../models/class.model.js";


export const createClass = async (req, res) => {

    try {

        const { name } = req.body;

        const isExist = await Class.findOne({ name });

        if (isExist) {
            return res.status(422).json({
                success: false,
                message: "Class Already Exists"
            })
        }

        const classNumber = await Class.create({
            name
        })

        return res.status(201).json({
            success: true,
            message: "Class created successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            name
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