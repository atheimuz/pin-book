import { NextRequest, NextResponse } from "next/server";
import { fetchMetaData } from "@/utils/fetch-meta";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const link = searchParams.get("link");

    if (!link) {
        return NextResponse.json({ status: 200, data: null });
    }

    try {
        const response = await fetch(link, { cache: "no-store" });
        const htmlData = await response.text();
        const content = await fetchMetaData(htmlData);
        return NextResponse.json({ status: 200, data: content });
    } catch (error) {
        return NextResponse.json(
            {
                message: `Error fetching brand. detail: ${
                    error instanceof Error ? error.message : "unknown"
                }`
            },
            { status: 500 }
        );
    }
}