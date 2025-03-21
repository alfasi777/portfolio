import {Outfit,Ovo, Noto_Sans} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100","400","500","600","700","900"],
});

const ovo = Ovo({
  subsets: ["latin"],
    weight: ["400"],
})

const noto = Noto_Sans({
  subsets: ["latin"],
    weight: ["100","400","500","600","700","900"],
})

export const metadata = {
  title: "אסף בדרי - פרוטפוליו",
  description: "nextjs15 SPA showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${noto.className} antialiased leading-6
                    overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
