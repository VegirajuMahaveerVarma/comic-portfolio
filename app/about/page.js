import Reveal from '@/components/Reveal';
import {site} from '@/data/site';
export const metadata={title:'About'};
export default function About(){
  return(<section className="pt-12"><h1 className="title text-6xl">Origin Story</h1>
    <div className="mt-8 grid gap-8 sm:grid-cols-2"><Reveal className="panel p-5"><div className="bubble mb-8"><p className="font-bold">{site.about}</p></div>
      <span className="cap">Education</span>{site.education.map(e=><div key={e.school} className="mt-3"><h3 className="font-display text-2xl tracking-wide">{e.school}</h3><p className="font-bold text-ink/75">{e.degree}<br/>{e.years}</p></div>)}</Reveal>
    <Reveal delay={.1} className="panel p-5"><span className="cap">Super powers</span>
      {Object.entries(site.skills).map(([k,v])=><div key={k} className="mt-4"><h3 className="mb-1.5 font-display text-xl tracking-wide">{k}</h3>
        <div className="flex flex-wrap gap-1.5">{v.map(t=><span key={t} className="tag">{t}</span>)}</div></div>)}</Reveal></div></section>);
}
