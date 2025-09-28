"use client";

import { Provider as JotaiProvider } from "jotai";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};
