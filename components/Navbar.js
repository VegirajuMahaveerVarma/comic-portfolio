'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';
import {site} from '@/data/site';
const links=[['/','Home'],['/projects','Projects'],['/about','About'],['/resume','Resume'],['/contact','Contact']];
export default function Navbar(){
  const path=usePathname();
  const toggle=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};
  return(<header className="sticky top-0 z-10 border-b-[3px] border-ink bg-bg"><nav className="mx-auto flex min-h-[62px] max-w-[1600px] flex-wrap items-center gap-1.5 px-6 md:px-12 py-1.5">
    <Link href="/" className="mr-auto -rotate-2 border-[3px] border-ink bg-red px-3 py-0.5 font-display text-xl tracking-wide text-white shadow-[3px_3px_0_rgb(var(--ink))]">{site.name}</Link>
    {links.map(([h,l])=>{const on=h==='/'?path==='/':path.startsWith(h);
      return <Link key={h} href={h} className={`relative px-2.5 py-1 font-display text-lg tracking-wide ${on?'text-black':'text-ink hover:text-red'}`}>
        {on&&<motion.span layoutId="pill" className="absolute inset-0 -z-10 -rotate-1 rounded border-2 border-ink bg-yel" transition={{type:'spring',stiffness:400,damping:28}}/>}{l}</Link>})}
    <button onClick={toggle} className="btn-ghost !px-3 !py-0 !text-base" aria-label="Toggle day or night mode">night mode</button>
  </nav></header>);
}
