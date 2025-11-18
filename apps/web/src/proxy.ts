import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const response = NextResponse.next();

    response.headers.set("x-url", request.url);
    response.headers.set("x-pathname", request.nextUrl.pathname);

    return response;
}

export const config = {
    matcher: ["/:path*"],
};
