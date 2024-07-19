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
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  );
}
