import {site} from '@/data/site';
export default function Marquee(){
  const all=Object.values(site.skills).flat();
  return(<div className="marquee-wrap -rotate-1 overflow-hidden border-y-[3px] border-ink bg-yel py-2 text-black" aria-hidden="true">
    <div className="marquee flex w-max gap-8 font-display text-2xl tracking-wide">{[...all,...all].map((s,i)=><span key={i}>&#9733; {s}</span>)}</div></div>);
}
