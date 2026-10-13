'use client';
import {useEffect,useRef,useState} from 'react';
import {animate,useInView,useReducedMotion} from 'framer-motion';

function Num({v}) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const m = String(v).match(/^([\d.]+)(.*)$/);
  const [s, setS] = useState(m ? (reduce ? m[1] : '0') : '');

  useEffect(() => {
    if (!m || !seen || reduce) return;
    const decimals = (m[1].split('.')[1] || '').length;
    const animation = animate(0, parseFloat(m[1]), {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: n => setS(n.toFixed(decimals))
    });
    return () => animation.stop();
  }, [seen, reduce]);

  return <span ref={ref}>{m ? s + m[2] : v}</span>;
}

export default function Metrics({p}) {
  const entries = Object.entries(p.metrics || {});
  // Never invent a metric or show a misleading "training" label when results are not available.
  if (!entries.length) return null;
  return (
    <div className="out" aria-label="Project results">
      {entries.map(([key, value]) => (
        <div key={key}>{key}: <Num v={value}/></div>
      ))}
    </div>
  );
}
