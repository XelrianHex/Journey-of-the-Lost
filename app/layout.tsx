import React from "react";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Journey of the Lost",
  description: "A text-based adventure game",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="m-0 font-sans flex flex-col h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;