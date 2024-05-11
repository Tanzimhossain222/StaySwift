import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/backend/db/connectDb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StaySwift ",
  description: "This is best Hotel Booking website in the world",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu={false}/>
        <main>
        {children}  
        </main>
        </body>
    </html>
  );
}
