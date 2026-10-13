'use client';
import {useState} from 'react';
import {site} from '@/data/site';

export default function ContactForm() {
  const [msg, setMsg] = useState('');
  const [sending, setSending] = useState(false);
  const configured = Boolean(site.formAction && !site.formAction.includes('YOUR_FORM_ID'));

  async function submit(event) {
    event.preventDefault();
    if (!configured || sending) return;
    const form = event.currentTarget;
    setSending(true);
    setMsg('Sending your message…');
    try {
      const response = await fetch(site.formAction, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Message request failed');
      form.reset();
      setMsg('Message sent — thanks for reaching out!');
    } catch {
      setMsg(site.email
        ? `Message could not be sent. Please email ${site.email} directly.`
        : 'Message could not be sent. Please use the GitHub link to get in touch.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="panel p-5">
      {[
        ['name', 'Name', 'input'],
        ['email', 'Email', 'input'],
        ['message', 'Message', 'textarea']
      ].map(([name, label, type]) => (
        <div key={name}>
          <label htmlFor={name} className="cap mb-1.5">{label}</label>
          {type === 'input'
            ? <input id={name} name={name} type={name === 'email' ? 'email' : 'text'} autoComplete={name === 'email' ? 'email' : 'name'} required className="field" />
            : <textarea id={name} name={name} rows={5} required className="field" />}
        </div>
      ))}
      {!configured && (
        <p className="mb-3 text-sm font-bold text-ink/75">
          The message form is not connected yet. You can still reach me through GitHub; a form endpoint can be added in data/site.js.
        </p>
      )}
      <button className="btn" type="submit" disabled={!configured || sending} aria-disabled={!configured || sending}>
        {sending ? 'Sending…' : 'Send it!'}
      </button>
      <p role="status" aria-live="polite" className="mt-3 font-bold">{msg}</p>
    </form>
  );
}
