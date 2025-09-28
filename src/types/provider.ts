import { SchemaTypes } from "@/types/api/generated.types";

type Provider = SchemaTypes["Provider"];

export type { Provider };

export const isProvider = (provider: unknown): provider is Provider => {
  return typeof provider === "object" && provider !== null && "id" in provider;
};
