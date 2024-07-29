import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "Юнікейс - Адвокатське Об'єднання",
  description: "Отримайте юридичну допомогу",
  openGraph: {
    title: "АО Юнікейс",
    description: "Отримайте правову допомогу",
    image: "https://www.aounicase.com.ua/unicase.webp",
    url: "https://www.aounicase.com.ua",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <GoogleTagManager gtmId="GTM-KD5RQWHG" />
      <GoogleTagManager gtmId="AW-16593300850" />
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD5RQWHG"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
