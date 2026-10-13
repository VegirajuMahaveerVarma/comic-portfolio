import {site} from '@/data/site';
export default function Footer(){
  return(<footer className="mt-16 border-t-[3px] border-ink bg-yel py-6 text-black"><div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 md:px-12 font-bold">
    <span className="font-display text-2xl tracking-wide">To be continued...</span>
    <span className="flex gap-5"><a href={site.github}>GitHub</a><a href={site.linkedin}>LinkedIn</a><a href={`mailto:${site.email}`}>Email</a></span>
  </div></footer>);
}
