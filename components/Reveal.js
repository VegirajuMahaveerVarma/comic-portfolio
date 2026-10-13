'use client';
import {motion} from 'framer-motion';
export default function Reveal({children,delay=0,className}){
  return <motion.div className={className} initial={{opacity:0,scale:.9,rotate:-1.5,y:24}} whileInView={{opacity:1,scale:1,rotate:0,y:0}} viewport={{once:true,margin:'-60px'}} transition={{type:'spring',stiffness:260,damping:18,delay}}>{children}</motion.div>;
}
