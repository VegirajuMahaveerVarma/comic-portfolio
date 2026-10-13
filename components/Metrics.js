'use client';
import {useEffect,useRef,useState} from 'react';
import {animate,useInView,useReducedMotion} from 'framer-motion';
function Num({v}){
  const ref=useRef(null),seen=useInView(ref,{once:true}),reduce=useReducedMotion();
  const m=String(v).match(/^([\d.]+)(.*)$/);
  const [s,setS]=useState(m?(reduce?m[1]:'0'):'');
  useEffect(()=>{
    if(!m||!seen||reduce)return;
    const dec=(m[1].split('.')[1]||'').length;
    const a=animate(0,parseFloat(m[1]),{duration:1.4,ease:'easeOut',onUpdate:n=>setS(n.toFixed(dec))});
    return()=>a.stop();
  },[seen]);
  return <span ref={ref}>{m?s+m[2]:v}</span>;
}
export default function Metrics({p}){
  const e=Object.entries(p.metrics);
  return <pre className="out">{e.length?e.map(([k,v])=><div key={k}>{k}: <Num v={v}/></div>):<div>status: training<span className="animate-pulse">...</span></div>}</pre>;
}
