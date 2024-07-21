import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Manrope from "@next/font/local";

const manrope = Manrope({
  src: [
    { path: "../assets/fonts/Manrope-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/Manrope-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/Manrope-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/Manrope-Bold.ttf", weight: "700" },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={`${manrope.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
