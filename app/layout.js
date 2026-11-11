import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "To do list em React"
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
