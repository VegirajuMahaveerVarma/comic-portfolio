import ContactForm from '@/components/ContactForm';
import {site} from '@/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Mahaveer Varma about projects, AI, software development, and collaboration.'
};

export default function Contact() {
  return (
    <section className="pt-12">
      <h1 className="title text-6xl">Got an Idea? Let’s Build It.</h1>
      <p className="mt-3 max-w-2xl font-bold text-ink/75">
        Interested in AI, software development, open source, or building something useful?
        I’m happy to connect with fellow developers, students, and people exploring interesting ideas.
      </p>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        <ContactForm />
        <div>
          <div className="bubble">
            <p className="font-bold">Have a project, a question, or an idea to explore? Send a signal.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 font-bold">
            {site.email && <a className="underline" href={`mailto:${site.email}`}>Email</a>}
            <a className="underline" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            {site.linkedin && <a className="underline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
