import { Inter } from "next/font/google"
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900']
});


export const metadata = {
  title: "Kofi Danso Amakye — Software Engineer & Technology Lead",
  description:
    "Portfolio of Kofi Danso Amakye, a software engineer and Founder / Technology Lead at 6lackTech.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
