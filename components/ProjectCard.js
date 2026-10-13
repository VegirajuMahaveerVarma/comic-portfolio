'use client';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Metrics from './Metrics';
const words=['POW!','ZAP!','BAM!','WOW!'];
export default function ProjectCard({p,i}){
  return(<motion.div className="relative" initial="rest" whileHover="hover" variants={{rest:{rotate:0,y:0},hover:{rotate:-1,y:-5}}} transition={{type:'spring',stiffness:300,damping:15}}>
    <motion.div className="burst-wrap pointer-events-none absolute -right-3 -top-6 z-10" variants={{rest:{scale:0,rotate:-30},hover:{scale:1,rotate:10}}} transition={{type:'spring',stiffness:400,damping:12}}>
      <div className="burst h-20 w-20 text-lg">{words[i%4]}</div></motion.div>
    <Link href={`/projects/${p.slug}`} className="panel block p-5 transition-shadow hover:shadow-[9px_9px_0_rgb(var(--ink))]">
      <div className="mb-2 flex flex-wrap items-center gap-2"><span className="cap">Issue #{i+1}</span>{p.status==='in-progress'&&<span className="cap !bg-red !text-white">To be continued</span>}</div>
      <h3 className="title text-3xl">{p.title}</h3>
      <p className="my-2 font-bold text-ink/75">{p.summary}</p>
      <div className="mb-3 flex flex-wrap gap-1.5">{p.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
      <Metrics p={p}/>
    </Link></motion.div>);
}
