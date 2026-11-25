import { useId, useState } from 'react';
import { Minus, Plus } from './Icons.jsx';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={it.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{it.q}</span>
              <span className="faq__toggle">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            <div id={id} className="faq__a" role="region" hidden={!isOpen}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
