import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Continuum Portfolio | Senior Product Designer & Engineer',
  description: 'A futuristic, high-converting portfolio designed for maximum impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
