import createFetchClient, { Middleware } from "openapi-fetch";
import createClient from "openapi-react-query";
const globalFetch = globalThis.fetch;
import qs from "qs";
import { getAccessToken } from "@auth0/nextjs-auth0";
import type { PathTypes } from "@/types/api/generated.types";

const authMiddleware: Middleware = {
  onRequest: async ({ request }) => {
    const fetch = await globalFetch("/api/auth/session").then((res) =>
      res.json(),
    );
    const session = await fetch;

    if (session?.success) {
      const accessToken = await getAccessToken();
      request.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return request;
  },
};

export const fetchClient = createFetchClient<PathTypes>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "no-api-url-in-env",
  querySerializer: (params) => {
    return qs.stringify(params);
  },
});

fetchClient.use(authMiddleware);

export const api = createClient<PathTypes>(fetchClient);

export const useQuery = api.useQuery;
export const useMutation = api.useMutation;
export const fetch = fetchClient;
