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
        <title>LORD\&apos;S BAKERS</title>
        <meta property="og:title" content="LORD'S BAKERS" />
        <meta
          property="og:description"
          content="Handcrafted cakes, pastries, and baked delights made with care and local ingredients."
        />
        <meta property="og:image" content={process.env.OG_IMAGE_URL} />
        <meta property="og:url" content={process.env.SELF_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`antialiased`}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
