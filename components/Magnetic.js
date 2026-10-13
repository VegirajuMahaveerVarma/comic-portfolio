'use client';
import {useRef} from 'react';
import {motion,useMotionValue,useSpring} from 'framer-motion';
export default function Magnetic({children}){
  const r=useRef(null),cfg={stiffness:200,damping:15};
  const mx=useMotionValue(0),my=useMotionValue(0),x=useSpring(mx,cfg),y=useSpring(my,cfg);
  return <motion.div ref={r} style={{x,y}} className="inline-block"
    onMouseMove={e=>{const b=r.current.getBoundingClientRect();mx.set((e.clientX-b.left-b.width/2)*.3);my.set((e.clientY-b.top-b.height/2)*.3)}}
    onMouseLeave={()=>{mx.set(0);my.set(0)}}>{children}</motion.div>;
}
