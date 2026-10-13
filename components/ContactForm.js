'use client';
import {useState} from 'react';
import {site} from '@/data/site';
export default function ContactForm(){
  const [msg,setMsg]=useState('');
  async function submit(e){e.preventDefault();const f=e.currentTarget;setMsg('Sending...');
    try{const r=await fetch(site.formAction,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
      if(!r.ok)throw 0;f.reset();setMsg('POW! Message sent. I will reply soon.')}
    catch{setMsg(`Could not send. Email me directly at ${site.email}.`)}}
  return(<form onSubmit={submit} className="panel p-5">
    {[['name','Name','input'],['email','Email','input'],['message','Message','textarea']].map(([n,l,t])=>
      <div key={n}><label htmlFor={n} className="cap mb-1.5">{l}</label>
      {t==='input'?<input id={n} name={n} type={n==='email'?'email':'text'} required className="field"/>:<textarea id={n} name={n} rows={5} required className="field"/>}</div>)}
    <button className="btn" type="submit">Send it!</button>
    <p role="status" className="mt-3 font-bold">{msg}</p>
  </form>);
}
