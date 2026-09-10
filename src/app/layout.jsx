import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins(
  {
    weight: ["100", "200", "400", "500", "600", "800"]
  }
)

export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
  // weight: ""
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-flame.vercel.app"), // TODO: replace with your real domain

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },
  description:
    "শিশুদের জন্য মানসম্মত educational toys ও learning tools — ঘরে বসে সহজে অর্ডার করুন।",

  icons: {
    icon: "https://i.ibb.co.com/XrgNzYTG/image.png",
    apple: "https://i.ibb.co.com/XrgNzYTG/image.png",
  },

  openGraph: {
    type: "website",
    siteName: "Hero Kidz",
    title: "Hero Kidz",
    description:
      "শিশুদের জন্য মানসম্মত educational toys ও learning tools — ঘরে বসে সহজে অর্ডার করুন।",
    images: [
      {
        url: "https://i.ibb.co.com/svsJvCLZ/image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz",
    description: "Educational toys for kids.",
    images: ["https://i.ibb.co.com/svsJvCLZ/image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html
        lang="en"
        className={`${poppins.className} antialiased`}
      >
        <body className="min-h-full flex flex-col" >
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>

  );
}
