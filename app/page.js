import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import {projects} from '@/data/projects';
export default function Home(){
  return(<><Hero/><div className="relative left-1/2 w-screen -translate-x-1/2"><Marquee/></div><section className="py-12"><Reveal><h2 className="title mb-8 text-4xl">Featured stories</h2></Reveal>
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">{projects.filter(p=>p.featured).map((p,i)=><Reveal key={p.slug} delay={i*.06}><ProjectCard p={p} i={i}/></Reveal>)}</div></section></>);
}
