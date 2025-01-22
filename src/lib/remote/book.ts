import { IBook } from "@/models/book";

export const getBookAPI = async (bookId: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/book/${bookId}`);
        const resJson = await res.json();
        const data: IBook = resJson.data;

        return data;
    } catch (e) {
        return {
            error: e instanceof Error ? e.message : "An unknown error occurred"
        };
    }
};
