import Students from "../models/students.model.js";

export const createStudent = async (req, res) => {
    try {

        const { name, studentId, dateOfBirth, section, rollNumber, gender, studentClass, address, guardianName } = req.body;

        const isExist = await Students.findOne({ studentId })
        if (isExist) {
            return res.status(422).json({
                success: false,
                message: "Student ID already exists"
            })
        }


        const isExist2 = await Students.findOne({ rollNumber })
        if (isExist2) {
            return res.status(422).json({
                success: false,
                message: "Roll number already exists"
            })
        }

        const student = await Students.create({
            name,
            studentId,
            dateOfBirth,
            section,
            rollNumber,
            gender,
            studentClass,
            guardianName,
            address
        })

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            student
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllStudent = async (req, res) => {
    try {

        const student = await Students.find();

        return res.status(200).json({
            success: true,
            message: "Students fetched Successfully",
            student
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const getStudentById = async (req, res) => {
    try {

        const { studentId } = req.body;

        const student = await Students.findOne({ studentId })

        if (!student) {
            return res.status(422).json({
                success: false,
                message: "No students found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            student
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateStudent = async (req, res) => {
    try {

        const { studentId, ...updateData } = req.body;

        const student = await Students.findOneAndUpdate(
            { studentId },
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteStudent = async (req, res) => {
    try {

        const { studentId } = req.body;

        const student = await Students.findOneAndDelete({ studentId });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};