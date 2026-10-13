'use client';
import {useEffect} from 'react';
import Lenis from 'lenis';
import {motion,useScroll,useSpring,useReducedMotion} from 'framer-motion';
export default function SmoothScroll(){
  const reduce=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const sx=useSpring(scrollYProgress,{stiffness:120,damping:25});
  useEffect(()=>{
    if(reduce)return;
    const l=new Lenis({lerp:.09});let id;
    const raf=t=>{l.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);
    return()=>{cancelAnimationFrame(id);l.destroy()};
  },[reduce]);
  return <motion.div style={{scaleX:sx}} className="fixed inset-x-0 top-0 z-20 h-1.5 origin-left bg-red"/>;
}
