'use client';
import React from "react";
import "../styles/globals.css";
import ReduxProvider from './redux-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Journey of the Lost</title>
        <meta name="description" content="A text based adventure rpg" />
      </head>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}