import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pallete Generator",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-full h-full ${mont.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
