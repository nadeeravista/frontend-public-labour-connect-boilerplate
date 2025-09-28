import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Read the role header set by middleware
    const userRole = request.headers.get("x-user-role") || "user";

    return NextResponse.json({ role: userRole });
  } catch (error) {
    return NextResponse.json({ role: "user" });
  }
}
