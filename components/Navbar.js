'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';
import {site} from '@/data/site';

const links = [['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About'], ['/resume', 'Resume'], ['/contact', 'Contact']];

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  };

  const isActive = href => href === '/' ? path === '/' : path.startsWith(href);
  const navLink = ([href, label]) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? 'page' : undefined}
        className={`relative rounded px-2.5 py-1 font-display text-lg tracking-wide transition-colors hover:text-red ${active ? 'text-black' : 'text-ink'}`}
      >
        {active && <motion.span layoutId="pill" className="absolute inset-0 -z-10 -rotate-1 rounded border-2 border-ink bg-yel" transition={{type: 'spring', stiffness: 400, damping: 28}} />}
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-10 border-b-[3px] border-ink bg-bg">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-[62px] max-w-[1600px] flex-wrap items-center gap-2 px-6 py-2 md:px-12">
        <Link href="/" className="mr-auto -rotate-2 border-[3px] border-ink bg-red px-3 py-0.5 font-display text-xl tracking-wide text-white shadow-[3px_3px_0_rgb(var(--ink))]">
          {site.name}
        </Link>
        <div className="hidden items-center gap-1.5 md:flex">
          {links.map(navLink)}
        </div>
        <button onClick={toggle} className="btn-ghost !px-3 !py-0 !text-base" aria-label="Toggle light or dark theme">
          <span aria-hidden="true">◐</span> Theme
        </button>
        <button
          type="button"
          className="btn-ghost !px-3 !py-0 !text-base md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        {menuOpen && (
          <div id="mobile-navigation" className="grid w-full grid-cols-2 gap-2 border-t-2 border-ink pt-3 md:hidden">
            {links.map(navLink)}
          </div>
        )}
      </nav>
    </header>
  );
}
