import TopBar from '@/components/top-bar';
import type { Metadata } from 'next';
import './globals.css';

const a: string = process.env.METADATA_TITLE_1 ?? 'Java';
const b: string = process.env.METADATA_TITLE_2 ?? 'Shop';

export const metadata: Metadata = {
  title: a + ' ' + b,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/public/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
      </head>
      <body className={`antialiased`}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
