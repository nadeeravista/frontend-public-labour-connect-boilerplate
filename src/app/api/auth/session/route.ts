import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "@/services/auth0";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const session = await auth0.getSession();

  if (session) {
    const idToken = session?.tokenSet?.idToken;
    let userRole = "user";
    if (idToken) {
      const idTokenDecoded = jwt.decode(idToken) as jwt.JwtPayload | null;
      if (
        idTokenDecoded &&
        typeof idTokenDecoded === "object" &&
        Array.isArray((idTokenDecoded as any)["user/roles"]) &&
        (idTokenDecoded as any)["user/roles"].length > 0
      ) {
        userRole = (idTokenDecoded as any)["user/roles"][0];
      }
    }

    return NextResponse.json({
      success: true,
      session: {
        user: session.user,
        expiresAt: session.expiresAt,
        role: userRole,
      },
    });
  } else {
    return NextResponse.json({});
  }
}
