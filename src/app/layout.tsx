import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://openclaw101.dev'),
  title: 'OpenClaw 101 — 从零开始，7天掌握你的AI私人助理',
  description:
    'The definitive guide to building your AI assistant with OpenClaw. 从零开始，7天掌握你的AI私人助理。',
  keywords: ['OpenClaw', 'AI助理', 'AI Assistant', 'Telegram Bot', '开源', 'self-hosted'],
  alternates: {
    canonical: 'https://openclaw101.dev',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'OpenClaw 101 — 从零开始，7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    type: 'website',
    url: 'https://openclaw101.dev',
    siteName: 'OpenClaw 101',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw 101 — 从零开始，7天掌握你的AI私人助理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw 101 — 从零开始，7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86ESEQC7V8"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-86ESEQC7V8');`}
        </Script>

        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.shipsolo.io/js/pa-JFzm3YyWo6Cak1n9mzePz.js"
          strategy="afterInteractive"
        />
        <Script id="plausible" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init();`}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
