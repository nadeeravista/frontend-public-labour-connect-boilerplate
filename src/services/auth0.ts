import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Function to create Auth0Client with custom parameters
export function createAuth0Client(options?: {
  domain?: string;
  clientId?: string;
  clientSecret?: string;
  appBaseUrl?: string;
  secret?: string;
  scope?: string;
  audience?: string;
  onCallback?: (req: any, res: any, context: any) => any;
}) {
  return new Auth0Client({
    domain: options?.domain || process.env.AUTH0_DOMAIN,
    clientId: options?.clientId || process.env.AUTH0_CLIENT_ID,
    clientSecret: options?.clientSecret || process.env.AUTH0_CLIENT_SECRET,
    appBaseUrl: options?.appBaseUrl || process.env.APP_BASE_URL,
    secret: options?.secret || process.env.AUTH0_SECRET,
    authorizationParameters: {
      prompt: "login",
      scope: options?.scope || process.env.AUTH0_SCOPE,
      audience: options?.audience || process.env.AUTH0_AUDIENCE,
    },
    onCallback: options?.onCallback,
  });
}

export const auth0 = createAuth0Client();
