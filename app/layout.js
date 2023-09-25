import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Loyalty program Buffet Crampon',
  description: 'write description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script id="my-script">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N57B4DV');
          `}
        </Script>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N57B4DV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}
       
      </body>
    </html>
  );
}
