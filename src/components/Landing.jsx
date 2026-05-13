import { useEffect, useState } from 'react';

export default function Landing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className="landing"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 600ms ease-out',
      }}
    >
      <h1 className="landing-headline">Hi, I'm Pradyun</h1>
      <p className="landing-sub">CS + Econ @ UW–Madison. Building things.</p>
      <span className="landing-scroll">↓ scroll</span>
    </header>
  );
}
