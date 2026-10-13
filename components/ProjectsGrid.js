'use client';
import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import ProjectCard from './ProjectCard';
const filters=[['all','All'],['completed','Completed'],['in-progress','In progress']];
export default function ProjectsGrid({projects}){
  const [f,setF]=useState('all');
  const list=projects.filter(p=>f==='all'||p.status===f);
  return(<>
    <div className="my-6 flex flex-wrap gap-3">{filters.map(([k,l])=>
      <button key={k} onClick={()=>setF(k)} aria-pressed={f===k} className={`btn-ghost ${f===k?'!bg-yel !text-black':''}`}>{l}</button>)}</div>
    <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3"><AnimatePresence mode="popLayout">{list.map((p,i)=>
      <motion.div key={p.slug} layout initial={{opacity:0,scale:.9,rotate:-2}} animate={{opacity:1,scale:1,rotate:0}} exit={{opacity:0,scale:.9}} transition={{type:'spring',stiffness:280,damping:20}}><ProjectCard p={p} i={i}/></motion.div>)}</AnimatePresence></div>
  </>);
}
