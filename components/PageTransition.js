'use client';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';
export default function PageTransition({children}){
  const p=usePathname();
  return <motion.div key={p} initial={{opacity:0,scale:.96,rotate:-.8,y:20}} animate={{opacity:1,scale:1,rotate:0,y:0}} transition={{type:'spring',stiffness:240,damping:20}}>{children}</motion.div>;
}
