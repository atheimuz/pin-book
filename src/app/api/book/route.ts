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

        if (!book) {
            return NextResponse.json(
                { success: false, message: "Book not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: book }, { status: 200 });
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

export async function POST(request: Request) {
    await connectToDatabase();

    try {
        const body = await request.json();
        const image = "https://prs.ohouse.com/apne2/any/v1-313723627950208.jpg?w=720";

        // 이미지 업로드 과정 필요
        // ...

        const newBook = new Book({
            image: image,
            pins: body.pins || [],
            createdAt: new Date()
        });

        await newBook.save();

        return NextResponse.json({ success: true, data: newBook }, { status: 201 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                success: false,
                message: `Failed to create book. detail: ${err.message}`
            },
            { status: 500 }
        );
    }
}
