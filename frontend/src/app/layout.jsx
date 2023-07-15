import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ClientThemeProvider } from "@/clientComponents/TailwindComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vanity Reserve",
  description: "Principal page for Vanity Reserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
