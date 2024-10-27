import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/react/sections/Header';
import { Raleway, Manrope, JetBrains_Mono } from '@next/font/google';
import { Footer } from '@/react/units/footer/ui/footer.component';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Задайте нужные веса
  variable: '--font-raleway', // Создайте CSS переменную для шрифта
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Задайте нужные веса
  variable: '--font-manrope', // Создайте CSS переменную для шрифта
});

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['700'], // Задайте нужные веса
  variable: '--font-jet-brains', // Создайте CSS переменную для шрифта
});

export const metadata: Metadata = {
  title: 'БИТКЭМП - разработка и обучение',
  description:
    'БИТКЭМП IT компания, образовательная организация, офлайн и онлайн. BITCAMP ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${manrope.variable} ${jetBrains.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
