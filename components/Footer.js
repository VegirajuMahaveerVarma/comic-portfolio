import {site} from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-16 border-t-[3px] border-ink bg-yel py-6 text-black">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 font-bold md:px-12">
        <span className="font-display text-2xl tracking-wide">To be continued…</span>
        <span className="flex flex-wrap gap-5">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {site.email && <a href={`mailto:${site.email}`}>Email</a>}
        </span>
      </div>
    </footer>
  );
}
