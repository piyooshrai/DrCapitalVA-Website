import type { Metadata } from 'next';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ExcellenceAgent from '@/components/ExcellenceAgent';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Capital VA | Healthcare Virtual Assistants — HIPAA Compliant',
  description: 'HIPAA-trained virtual assistants for healthcare practices. Patient scheduling, medical billing, follow-ups, and admin support — starting at $700/month.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drcapitalva.com',
    siteName: 'Dr. Capital VA',
    title: 'Dr. Capital VA | Healthcare Virtual Assistants',
    description: 'HIPAA-compliant VAs for healthcare practices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Capital VA',
    description: 'Healthcare Virtual Assistant Services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ExcellenceAgent />
      </body>
    </html>
  );
}
