import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    }
});

export const Book = mongoose.model("Book", bookSchema);