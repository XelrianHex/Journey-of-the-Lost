import type { Metadata } from "next";
import React from "react";
import {wrapper} from "../store/store"
import { Provider } from "react-redux";
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
  const { store } = wrapper.useWrappedStore({children});
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{props.children}</Provider>
      </body>
    </html>
  );
}
