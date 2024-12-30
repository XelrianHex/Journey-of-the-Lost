import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Journey of the Lost",
  description: "A text based adventure rpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
