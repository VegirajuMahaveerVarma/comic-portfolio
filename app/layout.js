import './globals.css';
import {Bangers, Comic_Neue} from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';
import {site} from '@/data/site';

const display = Bangers({weight: '400', subsets: ['latin'], variable: '--font-display'});
const sans = Comic_Neue({weight: ['400', '700'], subsets: ['latin'], variable: '--font-sans'});

export const metadata = {
  metadataBase: new URL('https://github.com'),
  title: {
    default: `${site.name} | AI & ML Portfolio`,
    template: `%s | ${site.name}`
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | AI & ML Portfolio`,
    description: site.tagline,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}"}} />
      </head>
      <body className="font-sans text-ink antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="mx-auto max-w-[1600px] overflow-x-clip px-6 md:px-12">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
