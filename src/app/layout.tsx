import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

import "./globals.scss";
import "./reset.scss";

const openSans = Open_Sans();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
