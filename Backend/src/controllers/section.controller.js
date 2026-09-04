import Class from "../models/class.model.js";
import Section from "../models/section.model.js";

export const createSection = async (req, res) => {
    try {
        const { className, sectionName } = req.body;

        const isExist = await Class.findById(className);

        if (!isExist) {
            return res.status(404).json({
                success: false,
                message: "Class not found"
            })
        }

        const sectionExist = await Section.findOne({ className, sectionName })

        if (sectionExist) {
            return res.status(409).json({
                success: false,
                message: "Section already exists"
            })
        }

        const sectionCreate = await Section.create({
            className,
            sectionName
        })
        return res.status(201).json({
            success: true,
            message: "Section created succeessfully ",
            className,
            sectionName
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}