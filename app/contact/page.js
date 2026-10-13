import ContactForm from '@/components/ContactForm';
import {site} from '@/data/site';
export const metadata={title:'Contact'};
export default function Contact(){
  return(<section className="pt-12"><h1 className="title text-6xl">Send a Signal</h1>
    <div className="mt-8 grid gap-10 sm:grid-cols-2"><ContactForm/>
      <div><div className="bubble"><p className="font-bold">Got a project, a job or a question? Drop me a line!</p></div>
        <p className="mt-10 font-bold"><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p><p className="mt-3 font-bold"><a className="underline" href={site.github}>GitHub</a><br/><a className="underline" href={site.linkedin}>LinkedIn</a></p></div></div></section>);
}
