import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createAuth0Client } from "./services/auth0";

/**
 * On callback we call Nest API /user/me - If no user not found it will create the new user
 * If user not found it will redirect to logout
 * If user found it will redirect to the returnTo url passed by Aut0
 */
const onCallback = async (req: any, res: any, context: any) => {
  const token = context.tokenSet?.accessToken;

  const roleResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json());

  if (roleResponse.error) {
    return NextResponse.redirect(
      new URL(`${process.env.APP_BASE_URL}/auth/logout`),
    );
  }

  const returnTo = res.returnTo;
  const callbackUrl = new URL(`${process.env.APP_BASE_URL}${returnTo}`);
  return NextResponse.redirect(callbackUrl);
};

/**
 * if a user trying to access the backend route and is not authenticated it will redirect to login
 * with the returnTo for Auth0
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const auth0 = createAuth0Client({ onCallback });
  const isBackendRoute = /^\/backend/.test(pathname);

  if (isBackendRoute) {
    const session = await auth0.getSession();
    // const userRole = extractUserRole(session);

    if (!session) {
      const parsedUrl = new URL(request.url);

      const pathAndQuery = parsedUrl.pathname + parsedUrl.search;
      const loginUrl = `${parsedUrl.origin}/auth/login?returnTo=${encodeURIComponent(pathAndQuery)}`;
      return NextResponse.redirect(loginUrl);
    }
  }

  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
