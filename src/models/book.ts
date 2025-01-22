import mongoose, { Document, Model, Schema } from "mongoose";
import { IProductPin } from "@/models/product";

interface IBook extends Document {
    _id: string;
    image: string;
    pins: IProductPin[];
    createdAt: Date;
}

const BookSchema: Schema<IBook> = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    pins: {
        type: [
            {
                x: Number,
                y: Number,
                link: String
            }
        ],
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const Book: Model<IBook> = mongoose.models.Book || mongoose.model<IBook>("Book", BookSchema);

export default Book;
export type { IBook };
