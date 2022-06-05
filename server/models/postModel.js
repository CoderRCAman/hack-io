import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
   
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    
}, {
    timestamps: true
})

export default mongoose.model('Post', postSchema)
