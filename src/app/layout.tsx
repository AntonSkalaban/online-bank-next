import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

import { QueryProvider } from "./QueryProvider";

import "./globals.scss";
import "./reset.scss";

const openSans = Open_Sans();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
