import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import SideBarItem from "@/components/sideBarItem";
import SideBarTab from "@/components/sideBarTab";
import SideBar from "@/components/sideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
