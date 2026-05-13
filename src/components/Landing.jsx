import { useEffect, useState } from 'react';

const HEADLINE = "Hi, I'm Pradyun";
const SUB = 'CS & Econ @UW-Madison. Building things.';
const TYPE_SPEED_MS = 90;
const START_DELAY_MS = 200;

export default function Landing() {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let tick;
    const startId = setTimeout(() => {
      let i = 0;
      tick = setInterval(() => {
        i++;
        setTyped(HEADLINE.slice(0, i));
        if (i >= HEADLINE.length) {
          clearInterval(tick);
          setDone(true);
        }
      }, TYPE_SPEED_MS);
    }, START_DELAY_MS);
    return () => {
      clearTimeout(startId);
      if (tick) clearInterval(tick);
    };
  }, []);

  return (
    <header className="landing">
      <h1 className="landing-headline">
        {typed}
        <span className="landing-caret" aria-hidden="true">|</span>
      </h1>
      <p className="landing-sub" data-show={done || undefined}>{SUB}</p>
      <span className="landing-scroll" data-show={done || undefined}>↓ scroll</span>
    </header>
  );
}
