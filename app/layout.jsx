import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "Юнікейс - Адвокатське Об'єднання - Головна",
  description: "Юнікейс - Адвокатське Об'єднання",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
