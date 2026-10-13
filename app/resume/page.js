import Reveal from '@/components/Reveal';
import {site} from '@/data/site';
export const metadata={title:'Resume'};
export default function Resume(){
  return(<section className="pt-12"><h1 className="title text-6xl">Character Sheet</h1>
    <p className="mt-2 font-bold text-ink/75">A one-page summary of my education, projects and skills.</p>
    <a className="btn mt-6" href="/resume.pdf" download>Download PDF</a>
    <Reveal className="panel mt-9 p-5"><span className="cap">Highlights</span>
      <ul className="mt-3 list-disc pl-5 font-bold">{site.highlights.map(h=><li key={h}>{h}</li>)}</ul></Reveal></section>);
}
