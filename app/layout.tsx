import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "STEMSAGE",
  description: "Hands-on STEM learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        <Navbar />

        <main>{children}</main>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        >
          WhatsApp
        </a>

        <Footer />

      </body>
    </html>
  );
}