import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects} from '@/data/projects';
import Metrics from '@/components/Metrics';
import Reveal from '@/components/Reveal';
export const generateStaticParams=()=>projects.map(p=>({slug:p.slug}));
export const generateMetadata=({params})=>({title:projects.find(p=>p.slug===params.slug)?.title});
export default function Project({params}){
  const p=projects.find(p=>p.slug===params.slug);if(!p)notFound();
  return(<article className="pt-12"><Link href="/projects" className="font-display text-lg tracking-wide hover:text-red">&lt; Back to the collection</Link>
    <h1 className="title mt-3 text-5xl sm:text-6xl">{p.title}</h1><p className="my-3 font-bold text-ink/75">{p.summary}</p>
    <div className="mb-4 flex flex-wrap gap-1.5">{p.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
    <Metrics p={p}/>
    <div className="mt-6 flex flex-wrap gap-4">{p.github&&<a className="btn" href={p.github}>GitHub</a>}{p.demo&&<a className="btn-ghost" href={p.demo}>Live demo</a>}</div>
    <div className="mt-10 grid gap-8 sm:grid-cols-2">{Object.entries(p.sections).map(([k,v],i)=>
      <Reveal key={k} className="panel p-5"><span className="cap">Panel {i+1}: {k}</span><p className="mt-3 font-bold text-ink/80">{v}</p></Reveal>)}</div></article>);
}
