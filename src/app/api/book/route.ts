import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";
import Book from "@/models/book";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    await connectToDatabase();
    try {
        const { id } = params;
        const bookId = new mongoose.Types.ObjectId(id);
        const book = await Book.findOne({ _id: bookId }).select(["_id", "image", "pins"]);
        return NextResponse.json({ status: 200, data: book });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                success: false,
                message: `Error fetching book. detail: ${err.message}`
            },
            { status: 500 }
        );
    }
}
