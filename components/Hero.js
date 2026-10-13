'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {motion,useReducedMotion} from 'framer-motion';
import Magnetic from './Magnetic';
import {site} from '@/data/site';
const pop={hidden:{opacity:0,scale:.85,rotate:-3},show:{opacity:1,scale:1,rotate:0,transition:{type:'spring',stiffness:240,damping:16}}};
export default function Hero(){
  const reduce=useReducedMotion();const [i,setI]=useState(0);
  useEffect(()=>{if(reduce){setI(site.name.length);return}
    if(i>=site.name.length)return;const t=setTimeout(()=>setI(i+1),90);return()=>clearTimeout(t)},[i,reduce]);
  return(<motion.section className="grid gap-6 pb-12 pt-12 md:grid-cols-[1.7fr_1fr]" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.18}}}}>
    <motion.div variants={pop} className="panel p-6">
      <span className="cap">Issue #1: The AI &amp; ML Student</span>
      <div className="bubble mt-6"><h1 className="min-h-[1.2em] font-display text-5xl tracking-wide sm:text-7xl" aria-label={`Hi, I'm ${site.name}`}>Hi, I&apos;m {site.name.slice(0,i)}<span className="animate-pulse bg-red">&nbsp;</span></h1></div>
      <p className="mt-9 max-w-md font-bold text-ink/80">{site.tagline}</p>
      <div className="mt-5 flex flex-wrap gap-4"><Magnetic><Link href="/projects" className="btn">Read the comic!</Link></Magnetic><Magnetic><Link href="/contact" className="btn-ghost">Say hello</Link></Magnetic></div>
    </motion.div>
    <motion.div variants={pop} className="panel flex items-center justify-center bg-yel p-6 [background-image:radial-gradient(rgba(0,0,0,.2)_1.6px,transparent_2px)] [background-size:12px_12px]">
      <div className="burst-wrap wiggle"><div className="burst h-48 w-48 text-3xl leading-none sm:h-56 sm:w-56 sm:text-4xl">AI<br/>+ ML<br/>POWER!</div></div>
    </motion.div>
  </motion.section>);
}
