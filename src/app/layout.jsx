import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "Time Tracker",
  description: "Track your time and tasks",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} border-2 border-muted/50 rounded-2xl`}>
      <body>{children}</body>
    </html>
  );
}
