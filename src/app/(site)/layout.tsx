"use client";

import "@/styles/index.css";
import "@/styles/prism-vsc-dark-plus.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
