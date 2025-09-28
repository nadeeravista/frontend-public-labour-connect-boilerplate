import { Outfit } from "next/font/google";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Auth0Provider } from "@/context/Auth0Context";
import { ApiProvider } from "@/services/api-client/ApiProvider";
import { StoreProvider } from "@/context/StoreProvider";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <StoreProvider>
          <ApiProvider>
            <Auth0Provider>
              <ThemeProvider>
                <SidebarProvider>{children}</SidebarProvider>
              </ThemeProvider>
            </Auth0Provider>
          </ApiProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
