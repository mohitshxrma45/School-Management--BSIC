import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema(
    {
        sectionName: {
            type: String,
            required: true,
            trim: true
        },

        className: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true
        }
    },
    {
        timestamps: true
    }
)


sectionSchema.index(
    { name: 1, class: 1 },
    { unique: true }
)

const Section = mongoose.model("Section", sectionSchema);
export default Section;